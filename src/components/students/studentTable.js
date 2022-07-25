/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

import CoachAssignModal from './student-coach-assign-modal';
import StudentRegistryModal from './studentRegistryModal';
import StudentModal from './studentModal';
import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
} from '../../services/students/students';
import getCoachById from '../../services/coaches/coaches';

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

const refreshPage = async () => {
  window.location.reload(true);
};

const deactivateHandler = async (studentId) => {
  const updatedStudent = await getStudentById(studentId);
  updatedStudent.state = 'inactive';
  await updateStudent(updatedStudent);
  refreshPage();
};

const activateHandler = async (studentId) => {
  const updatedStudent = await getStudentById(studentId);
  updatedStudent.state = 'active';
  await updateStudent(updatedStudent);
  refreshPage();
};

const declineHandler = async (studentId) => {
  const updatedStudent = await getStudentById(studentId);
  updatedStudent.state = 'rejected';
  await updateStudent(updatedStudent);
  refreshPage();
};

const reassignCoachHandler = async (studentId, coachId) => {
  const updatedStudent = await getStudentById(studentId);
  updatedStudent.coachId = coachId;
  await updateStudent(updatedStudent);
  refreshPage();
};

TabPanel.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export default function StudentTable() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState('');

  const refreshStudents = async () => {
    setIsLoading(true);
    const response = await getStudents();

    setIsLoading(false);
    setStudents(response);
  };
  useEffect(() => {
    refreshStudents();
  }, []);

  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [value, setValue] = useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <ProgressIndicatorOverlay active={isLoading} />
      <Box sx={{ bgcolor: 'background.paper', width: '25%' }}>
        <AppBar position="static">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            variant="fullWidth"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#FFFFFF',
                height: '3px',
              },
            }}
          >
            <Tab label="Active" {...a11yProps(0)} />
            <Tab label="Inactive" {...a11yProps(1)} />
            <Tab label="Applicants" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
      </Box>
      <TextField
        value={search}
        placeholder="Search..."
        variant="outlined"
        size="small"
        margin="normal"
        align="right"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <StudentRegistryModal />
      <TabPanel value={tabValue} index={0}>
        <TableContainer component={Paper} sx={{ height: '69vh' }}>
          <Table sx={{ minWidth: 10 }} stickyHeader>
            {/* <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {stableSort(
              students.filter((item) => item.state === sortState),
              getComparator(order, orderBy)
            )
              .filter((student) =>
                student.firstName
                  .concat(student.lastName)
                  .concat(student.email)
                  .concat(student.studentCellPhone)
                  .concat(getCoachById(student.coachId).coachFirstName)
                  .concat(getCoachById(student.coachId).coachLastName)
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .map((student, index) => {
                return (
                  <TableRow tabIndex={0} key={student.id}>
                    <TableCell>
                      {student.lastName}, {student.firstName}
                    </TableCell>
                    <TableCell align="left">{student.email}</TableCell>
                    <TableCell align="left">
                      {student.studentCellPhone}
                    </TableCell>
                    <TableCell>
                      <Grid container spacing={2}>
                        {sortState === 'active' && (
                          <Grid item>
                            <StudentModal type="Deactivate" />
                          </Grid>
                        )}
                        {sortState === 'inactive' && (
                          <Grid item>
                            <StudentModal type="reactivate" />
                          </Grid>
                        )}
                        {sortState === 'applied' && (
                          <Grid item>
                            <StudentModal type="activate" />
                          </Grid>
                        )}
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
            */}
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
