/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
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

import {
  getStudents,
  getStudentById,
  updateStudent,
} from '../../services/students/students';
// import { getCoachById } from '../../services/coaches/coaches';

import StudentModal from './studentModal';
import StudentRegistryModal from './studentRegistryModal';
import SearchBar from './searchBar';

import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

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
  getStudentById(studentId).state = 'Inactive';
  updateStudent(getStudentById(studentId));
};

const activateHandler = (studentId) => {
  getStudentById(studentId).state = 'Active';
  updateStudent(getStudentById(studentId));
};

const declineHandler = (studentId) => {
  getStudentById(studentId).state = 'Rejected';
  updateStudent(getStudentById(studentId));
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

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const refreshStudents = async () => {
    setIsLoading(true);
    const response = await getStudents();

    setIsLoading(false);
    setStudents(response);
  };

  useEffect(() => {
    refreshStudents();
  }, []);

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
      <ProgressIndicatorOverlay active={isLoading} />
      <Grid container spacing={0}>
        <Grid item xs={3}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Active" {...a11yProps(0)} />
            <Tab label="Inactive" {...a11yProps(1)} />
            <Tab label="Applicants" {...a11yProps(1)} />
          </Tabs>
        </Grid>
        <Grid item xs={3} />
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
        <TableContainer component={Paper} sx={{ height: '69vh' }}>
          <Table sx={{ minWidth: 10 }} stickyHeader>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left">Coach</StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {students
                .filter((post) => {
                  // if (post.state.includes('active')) {
                    if (search === '') {
                      return post;
                    }
                    if (
                      post.firstName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.lastName.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.studentCellPhone
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                  // }
                  return null;
                })

                .map((student) => (
                  <StyledTableRow
                    key={student.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Link
                        component="button"
                        variant="body2"
                        onClick={toDetailDemo}
                      >
                        {student.lastName}, {student.firstName}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.email || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.studentCellPhone || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.state || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <StudentModal
                        modalType="deactivate"
                        confirmHandler={deactivateHandler}
                        studentId={student.id}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <TableContainer component={Paper} sx={{ height: '69vh' }}>
          <Table sx={{ minWidth: 10 }}>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Name </StyledTableCell>
                <StyledTableCell align="left">Email</StyledTableCell>
                <StyledTableCell align="left">Phone Number</StyledTableCell>
                <StyledTableCell align="left">Coach</StyledTableCell>
                <StyledTableCell align="left"> </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {students
                .filter((post) => {
                  if (post.state.includes('Rejected')) {
                    if (search === '') {
                      return post;
                    }
                    if (
                      post.firstName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.lastName.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.studentCellPhone
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                  }
                  return null;
                })
                .map((student) => (
                  <StyledTableRow
                    key={student.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Link
                        component="button"
                        variant="body2"
                        onClick={toDetailDemo}
                      >
                        {student.lastName}, {student.firstName}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.email || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.studentCellPhone || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">--</StyledTableCell>
                    <StyledTableCell align="left">
                      <StudentModal
                        modalType="reactivate"
                        confirmHandler={activateHandler}
                        studentId={student.id}
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <TableContainer component={Paper} sx={{ height: '69vh' }}>
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
              {students
                .filter((post) => {
                  if (post.state.includes('Applied')) {
                    if (search === '') {
                      return post;
                    }
                    if (
                      post.firstName
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.lastName.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.studentCellPhone
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                  }
                  return null;
                })
                .map((student) => (
                  <StyledTableRow
                    key={student.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <Link
                        component="button"
                        variant="body2"
                        onClick={toDetailDemo}
                      >
                        {student.lastName}, {student.firstName}
                      </Link>
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.email || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {student.studentCellPhone || '--'}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <StudentModal
                        modalType="accept"
                        confirmHandler={activateHandler}
                        studentId={student.id}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      <StudentModal
                        modalType="decline"
                        confirmHandler={declineHandler}
                        studentId={student.id}
                      />
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
