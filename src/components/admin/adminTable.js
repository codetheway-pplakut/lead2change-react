import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import SearchBar from './searchBar';
import DeleteAdmin from './deleteAdmin';
import EditModal from './editAdmin/editAdmin';

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

export default function AdminTable() {
  return (
    <>
      <SearchBar sx={{}} />
      <TableContainer
        component={Paper}
        align="center"
        sx={{
          backgroundColor: '#3764A8',
          color: 'white',
          fontSize: 'large',
          width: '50%',
          marginLeft: '25%',
          marginRight: '25%',
        }}
      >
        <Table aria-label="customized table">
          <TableHead
            sx={{
              backgroundColor: '#3764A8',
              color: 'white',
              fontSize: 'large',
            }}
          >
            <TableRow
              sx={{
                backgroundColor: '#3764A8',
                color: 'white',
                fontSize: 'large',
              }}
            >
              <TableCell
                align="left"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                <Grid container>
                  <Grid item xs={6} />
                  <Grid item xs={2}>
                    Name
                  </Grid>
                </Grid>
              </TableCell>

              <TableCell
                align="left"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Username
              </TableCell>

              <TableCell
                align="left"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Email
              </TableCell>

              <TableCell
                align="left"
                sx={{
                  color: 'white',
                  fontSize: 'large',
                }}
              >
                Delete
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
                  <DeleteAdmin />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
