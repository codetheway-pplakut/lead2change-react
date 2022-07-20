import * as React from 'react'; 
import { useState, useEffect } from 'react'; 
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditAdmin from './editAdmin';
import IsActive from './isActive';
import { getAdmin, updateAdmin } from '../../services/admin/admin'; 

function createData(name, username, email) {
  return { name, username, email };
}

const rows = [
  createData('Admin1', 'AdminUserName1', 'Admin1@gmail.com'),
  createData('Admin2', 'AdminUserName2', 'Admin1@gmail.com'),
  createData('Admin3', 'AdminUserName3', 'Admin1@gmail.com'),
  createData('Admin4', 'AdminUserName4', 'Admin1@gmail.com'),
  createData('Admin5', 'AdminUserName5', 'Admin1@gmail.com'),
];

const tablePositioning = {
  backgroundColor: '#3764A8',
  color: 'white',
  fontSize: 'large',
  width: '50%',
  marginLeft: '25%',
  marginRight: '25%',
};

const tableHeadingText = {
  color: 'white',
  fontSize: 'large',
};

export default function AdminTable() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [admins, setAdmins] = useState([]);
  const [activeAdmin, setActiveAdmin] = useState([]);
  const [updateAdminModal, setUpdateAdminModal] = useState(false);
  const [adminToUpdate, setAdminToUpdate] = useState('');

  useEffect(() => {
    refreshAdmin();
  }, []);

  const refreshAdmin = async () => {
    const response = await getAdmin();
    setAdmins(response);
    setActiveAdmin(response.filter((admin) => true));
  };

  const updateModalChange = (adminId) => {
    if (updateAdminModal === true) {
      setUpdateAdminModal(false);
    } else {
      const adminIndex = admins.findIndex((admin) => admin.id === adminId);
      setAdminToUpdate(admins[adminIndex]);
      setUpdateAdminModal(true);
    }
  };

  const updateAdminHandler = async (
    adminId,
    newFirstName,
    newLastName,
    newEmail,
    newPassword
  ) => {
    const updatedAdmin = {
      id: adminId,
      firstName: newFirstName,
      lastName: newLastName,
      email: newEmail,
      password: newPassword,
    };
    await updateAdmin(updatedAdmin);
    refreshAdmin();
    updateModalChange();
  };

  return (
    <div>
      <TableContainer component={Paper} align="center" sx={tablePositioning}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left" sx={tableHeadingText}>
                <Grid container>
                  <Grid item xs={6} />
                  <Grid item xs={2}>
                    Name
                  </Grid>
                </Grid>
              </TableCell>

              <TableCell align="left" sx={tableHeadingText}>
                Username
              </TableCell>

              <TableCell align="left" sx={tableHeadingText}>
                Email
              </TableCell>

              <TableCell align="left" sx={tableHeadingText}>
                Deactivate
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={
                  index % 2
                    ? { background: '#eeeeee' }
                    : { background: 'white' }
                }
              >
                <TableCell component="th" scope="row">
                  <Grid container alignItems="center" justify="center">
                    <Grid item xs={6}>
                      <Box>
                        <EditAdmin
                          admin={adminToUpdate}
                          onSubmit={updateAdminHandler}
                          handleClose={updateModalChange}
                        />
                        <Typography />
                      </Box>
                    </Grid>
                    <Grid item xs={2}>
                      <Box>
                        {row.name}
                        <Typography />
                      </Box>
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="left">{row.username}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">
                  <IsActive name={row.name} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
