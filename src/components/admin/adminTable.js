import * as React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import EditAdminModal from './editAdminModal';
import DeleteAdminModal from './deleteAdminModal';
import DeactivateAdminModal from './deactivateAdminModal';
import RegisterAdminModal from './registerAdminModal';
import SearchBar from './SearchBar';

import {
  getAdmins,
  // addAdmin,
  // updateAdmin,
  // getAdminById,
} from '../../services/Admin/admin';

import {
  getStudents,
  // getStudentById,
  // updateStudent,
} from '../../services/students/students';

import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

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

const tableDelete = {
  color: 'white',
  fontSize: 'large',
  paddingLeft: '32px',
};

export default function AdminTable() {
  const [admins, setAdmins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshStudents = async () => {
    setIsLoading(true);
    const response = await getAdmins();

    setIsLoading(false);
    setAdmins(response);
  };
  useEffect(() => {
    refreshStudents();
  }, []);

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <ProgressIndicatorOverlay active={isLoading} />

      <Box sx={{ mt: '10px', mb: '10px' }}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={3} />
          <Grid item xs={4} align="right">
            <RegisterAdminModal />
          </Grid>
          <Grid item xs={2} align="right">
            <Box>
              <SearchBar />
            </Box>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </Box>

      <TableContainer sx={tablePositioning}>
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
                Email
              </TableCell>
              <TableCell align="left" sx={tableDelete}>
                Delete
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {admins.map((admin, index) => (
              <TableRow
                key={admin.id}
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
                        <EditAdminModal />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      {admin.userName}
                    </Grid>
                  </Grid>
                </TableCell>
                <TableCell align="left">{admin.email}</TableCell>
                <TableCell align="left">
                  <DeactivateAdminModal adminId={admin.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
