import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SearchBar from 'material-ui-search-bar';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import EditModal from './editAdmin';
import IsActive from './isActive';
import Admin from './registerAdmin';

// import { getAdmin } from '../../services/admin/admin';

function createData(name, username, email) {
  return { name, username, email };
}

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
  const data = [
    { name: 'Admin1', username: 'AdminUserName1', email: 'Admin1@gmail.com' },
    { name: 'Admin2', username: 'AdminUserName2', email: 'Admin1@gmail.com' },
    { name: 'Admin3', username: 'AdminUserName3', email: 'Admin1@gmail.com' },
    { name: 'Admin4', username: 'AdminUserName4', email: 'Admin1@gmail.com' },
    { name: 'Admin5', username: 'AdminUserName5', email: 'Admin1@gmail.com' },
  ];

  const [rows, setRows] = useState(data);
  const [searched, setSearched] = useState('');

  const requestSearch = (searchedVal) => {
    const filteredRows = data.filter((row) => {
      return row.name.toLowerCase().includes(searchedVal.toLowerCase());
    });
    setRows(filteredRows);
  };

  const cancelSearch = () => {
    setSearched('');
    requestSearch(searched);
  };

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ mt: '10px', mb: '10px' }}>
        <Grid container alignItems="center" justify="center">
          <Grid item xs={3} />
          <Grid item xs={4} align="right">
            <Admin />
          </Grid>
          <Grid item xs={2} align="right">
            <Box>
              <SearchBar
                value={searched}
                onChange={(searchVal) => requestSearch(searchVal)}
                onCancelSearch={() => cancelSearch()}
              />
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
                Username
              </TableCell>

              <TableCell align="left" sx={tableHeadingText}>
                Email
              </TableCell>

              <TableCell align="left" sx={tableHeadingText}>
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
                        <EditModal admin={rows} />
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
