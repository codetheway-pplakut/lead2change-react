import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import DeleteAdminModal from './deleteAdminModal';
import InactivateAdminModal from './inactivateAdminModal';
import EditAdminModal from './editAdminModal';
import SearchBar from './FilterBar';
import RegisterAdminModal from './registerAdminModal';

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
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
const deactivateHandler = () => {
  // console.log('this is when it should deactivate');
};

const deleteHandler = () => {
  // console.log('this is when it should delete');
};

const reactivateHandler = () => {
  // console.log('this is when it should reactivate');
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

function createDataActive(name, email, deactivate) {
  return { name, email, deactivate };
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
    'test1',
    'test1@gmail.com',
    <Stack spacing={2} direction="row">
      <InactivateAdminModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
      />
    </Stack>
  ),
  createDataActive(
    'test2',
    'test2@gmail.com',
    <Stack spacing={2} direction="row">
      <InactivateAdminModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
      />
    </Stack>
  ),
  createDataActive(
    'test3',
    'test3@gmail.com',
    <Stack spacing={2} direction="row">
      <InactivateAdminModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
      />
    </Stack>
  ),
  createDataActive(
    'test4',
    'test4@gmail.com',
    <Stack spacing={2} direction="row">
      <InactivateAdminModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
      />
    </Stack>
  ),
  createDataActive(
    'test5',
    'test5@gmail.com',
    <Stack spacing={2} direction="row">
      <InactivateAdminModal
        modalType="deactivate"
        confirmHandler={deactivateHandler}
      />
    </Stack>
  ),
];

const rowsInactive = [
  createDataInactive(
    'Test6',
    'test6@gmail.com',
    <Stack spacing={2} direction="row">
      <DeleteAdminModal modalType="delete" confirmHandler={deleteHandler} />
    </Stack>
  ),
  createDataInactive(
    'Test7',
    'test7@gmail.com',
    <Stack spacing={2} direction="row">
      <DeleteAdminModal modalType="delete" confirmHandler={deleteHandler} />
    </Stack>
  ),
  createDataInactive(
    'Test8',
    'test8@gmail.com',
    <Stack spacing={2} direction="row">
      <DeleteAdminModal modalType="delete" confirmHandler={deleteHandler} />
    </Stack>
  ),
];

export default function StudentTable() {
  const [search, setSearch] = useState('');

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <Typography
        style={{ color: '#2656A5' }}
        variant="h4"
        align="center"
        sx={{ m: '2vh' }}
      >
        Students
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Active" />
            <Tab label="Inactive" />
          </Tabs>
        </Grid>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <Box>
            <SearchBar setSearch={setSearch} />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <RegisterAdminModal />
        </Grid>
      </Grid>
      <TabPanel value={value} index={0}>
        <TableContainer component={Paper} sx={{ height: '65vh' }}>
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
                      {row.name}
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
        <TableContainer component={Paper} sx={{ height: '65vh' }}>
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
                      {row.name}
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
