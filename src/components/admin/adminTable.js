import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from './searchBar';
import EditModal from './editAdmin';
import InactiveAdmin from './inactivateAdmin';
import RegisterAdmin from './registerAdmin';

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
  return (
    <>
      <Grid container>
        <RegisterAdmin />
        <Grid item xs="12">
          <SearchBar />
        </Grid>
      </Grid>
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
                        <EditModal />
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
                  <InactiveAdmin />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
