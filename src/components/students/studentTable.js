/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import StudentModal from './studentModal';
import StudentRegistryModal from './studentRegistryModal';
import SearchBar from './searchBar';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#2656A5',
    color: theme.palette.common.white,
  },
  // [`&.${tableCellClasses.body}`]: { },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const deactivateHandler = (studentId) => {
  console.log('this is when it should deactivate using', studentId);
};

const deleteHandler = (studentId) => {
  console.log('this is when it should delete using', studentId);
};

const reactivateHandler = (studentId) => {
  console.log('this is when it should reactivate using', studentId);
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function createDataActive(
  firstName,
  lastName,
  email,
  number,
  coaches,
  deactivate
) {
  return { firstName, lastName, email, number, coaches, deactivate };
}

function createDataInactive(
  firstName,
  lastName,
  email,
  number,
  deleteStudent,
  reactivate
) {
  return { firstName, lastName, email, number, deleteStudent, reactivate };
}

const rows = [
  createDataActive(
    'Kevin',
    'Niu',
    'niuK@gmail.com',
    '262 - 592 - 4149',
    24,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
  createDataActive(
    'Jason',
    'Dong',
    'dongJ@gmail.com',
    '283 - 139 - 2381',
    37,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
  createDataActive(
    'Sirat',
    'Mokha',
    'mokhaS@gmail.com',
    '342 - 582 - 6148',
    24,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
  createDataActive(
    'Noah',
    'Ren',
    'renN@gmail.com',
    '213 - 436 - 3412',
    67,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
  createDataActive(
    'Holly',
    'Raetz',
    'raetzH@gmail.com',
    '582 - 581 - 2499',
    67,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
  createDataActive(
    'Aadi',
    'Tiwari',
    'tiwariA@gmail.com',
    '231 - 381 - 4814',
    49,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
];

const rowsInactive = [
  createDataInactive(
    'John',
    'Doe',
    'doeJ@gmail.com',
    '592 - 124 - 4144',
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="delete"
        confirmHandler={deleteHandler}
        studentId="student-id"
      />
    </Stack>,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="reactivate"
        confirmHandler={reactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
  createDataInactive(
    'Bob',
    'Jones',
    'jonesB@gmail.com',
    '693 - 491 - 5812',
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="delete"
        confirmHandler={deleteHandler}
        studentId="student-id"
      />
    </Stack>,
    <Stack spacing={2} direction="row">
      <StudentModal
        modalType="reactivate"
        confirmHandler={reactivateHandler}
        studentId="student-id"
      />
    </Stack>
  ),
];

export default function StudentTable() {
  const navigate = useNavigate();

  const toDetailDemo = () => {
    navigate(ROUTES.STUDENT_INFO);
  };

  const [search, setSearch] = useState('');

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <Grid
        item
        align="center"
        style={{
          backgroundColor: '#2656A5',
          marginBottom: '2vh',
          color: '#FFFFFF',
          padding: '0.1vh',
        }}
      >
        <h1>STUDENTS</h1>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Active" {...a11yProps(0)} />
            <Tab label="Inactive" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box>
            <SearchBar setSearch={setSearch} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <StudentRegistryModal />
        </Grid>
      </Grid>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper} sx={{ height: '64vh' }}>
          <Table sx={{ minWidth: 10 }} stickyHeader>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((post) => {
                  if (search === '') {
                    return post;
                  }
                  if (
                    post.firstName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (
                    post.lastName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (post.email.toLowerCase().includes(search.toLowerCase())) {
                    return post;
                  }
                  if (
                    post.number.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  return null;
                })
                .map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Link
                        component="button"
                        variant="body2"
                        onClick={toDetailDemo}
                      >
                        {row.lastName}, {row.firstName}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="left">{row.number}</StyledTableCell>
                    <StyledTableCell align="left">
                      {' '}
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-simple-select-label">
                            Coach
                          </InputLabel>
                          <Select label="Coach">
                            <MenuItem value={10}>Coach 1</MenuItem>
                            <MenuItem value={20}>Coach 2</MenuItem>
                            <MenuItem value={30}>Coach 3</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.deactivate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TableContainer component={Paper} sx={{ height: '55vh' }}>
          <Table sx={{ minWidth: 10 }}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {rowsInactive
                .filter((post) => {
                  if (search === '') {
                    return post;
                  }
                  if (
                    post.firstName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (
                    post.lastName.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  if (post.email.toLowerCase().includes(search.toLowerCase())) {
                    return post;
                  }
                  if (
                    post.number.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return post;
                  }
                  return null;
                })
                .map((row) => (
                  <StyledTableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Link
                        component="button"
                        variant="body2"
                        onClick={toDetailDemo}
                      >
                        {row.lastName}, {row.firstName}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">{row.email}</StyledTableCell>
                    <StyledTableCell align="left">{row.number}</StyledTableCell>
                    <StyledTableCell align="left">
                      {row.deleteStudent}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.reactivate}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
