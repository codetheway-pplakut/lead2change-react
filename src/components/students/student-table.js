/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@mui/icons-material/Add';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

import { useNavigate } from 'react-router';
import ROUTES from '../../constants/routes';

import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

import CoachAssignModal from './student-assign-coach-modal';
import StudentModal from './student-modal';
import {
  getStudents,
  getStudentById,
  updateStudent,
} from '../../services/students/students';
import { getCoachById } from '../../services/coaches/coaches';

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

function controlTabs(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCellsActive = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'studentCellPhone',
    numeric: false,
    disablePadding: false,
    label: 'Phone Number',
  },
  {
    id: 'coach',
    numeric: false,
    disablePadding: false,
    label: 'Coach',
  },
  {
    id: 'empty',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];
const headCellsInactive = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'studentCellPhone',
    numeric: false,
    disablePadding: false,
    label: 'Phone Number',
  },
  {
    id: 'empty',
    numeric: false,
    disablePadding: false,
    label: '',
  },
  {
    id: 'empty',
    numeric: false,
    disablePadding: false,
    label: '',
  },
];
const headCellsApplied = [
  {
    id: 'lastName',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'studentCellPhone',
    numeric: false,
    disablePadding: false,
    label: 'Phone Number',
  },
  {
    id: 'accept',
    numeric: false,
    disablePadding: false,
    label: 'Accept',
  },
  {
    id: 'reject',
    numeric: false,
    disablePadding: false,
    label: 'Reject',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  headCells: PropTypes.array.isRequired,
};

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
  const [students, setStudents] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const onSearchChange = (value) => {
    setSearch(value);
  };

  const refreshStudents = async () => {
    setIsLoading(true);
    const response = await getStudents();

    setIsLoading(false);
    setStudents(response);
  };
  useEffect(() => {
    refreshStudents();
  }, []);

  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const navigate = useNavigate();

  const onRegisterClick = () => {
    navigate(ROUTES.SIGN_UP);
  };

  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <ProgressIndicatorOverlay active={isLoading} />
      <Grid container spacing={2} sx={{ pr: '2vh' }}>
        <Grid item xs={6}>
          <Box width="33vh">
            <AppBar position="static">
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="inherit"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: '#FFFFFF',
                    height: '3px',
                  },
                }}
              >
                <Tab label="Active" {...controlTabs(0)} />
                <Tab label="Inactive" {...controlTabs(1)} />
                <Tab label="Applicants" {...controlTabs(2)} />
              </Tabs>
            </AppBar>
          </Box>
        </Grid>
        <Grid item xs={5} align="right">
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
              onSearchChange(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={1} align="left">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            sx={{ mt: '2vh' }}
            onClick={onRegisterClick}
          >
            Student
          </Button>
        </Grid>
      </Grid>
      <TabPanel value={tabValue} index={0}>
        <TableContainer component={Paper} sx={{ height: '68vh' }}>
          <Table sx={{ minWidth: 10 }} stickyHeader>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCellsActive}
            />
            <TableBody>
              {stableSort(students, getComparator(order, orderBy))
                .filter((post) => {
                  if (post.state === 'active') {
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
                      post.email !== null &&
                      post.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.studentCellPhone !== null &&
                      post.studentCellPhone
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.coachId !== null &&
                      getCoachById(post.coachId)
                        .coachFirstName.toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.coachId !== null &&
                      getCoachById(post.coachId)
                        .coachLastName.toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.coachId === null &&
                      'unassigned'.includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                  }
                  return null;
                })
                .map((student) => {
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
                        <CoachAssignModal
                          confirmHandler={reassignCoachHandler}
                          studentId={student.id}
                          coachId={student.coachId}
                        />
                      </TableCell>
                      <TableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <StudentModal
                              modalType="deactivate"
                              studentId={student.id}
                              confirmHandler={deactivateHandler}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <TableContainer component={Paper} sx={{ height: '68vh' }}>
          <Table sx={{ minWidth: 10 }} stickyHeader>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCellsInactive}
            />
            <TableBody>
              {stableSort(students, getComparator(order, orderBy))
                .filter((post) => {
                  if (post.state === 'inactive') {
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
                      post.email !== null &&
                      post.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.studentCellPhone !== null &&
                      post.studentCellPhone
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                  }
                  return null;
                })
                .map((student) => {
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
                          <Grid item>
                            <StudentModal
                              modalType="reactivate"
                              studentId={student.id}
                              confirmHandler={activateHandler}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <TableContainer component={Paper} sx={{ height: '68vh' }}>
          <Table sx={{ minWidth: 10 }} stickyHeader>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              headCells={headCellsApplied}
            />
            <TableBody>
              {stableSort(students, getComparator(order, orderBy))
                .filter((post) => {
                  if (post.state === 'applied') {
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
                      post.email !== null &&
                      post.email.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.studentCellPhone !== null &&
                      post.studentCellPhone
                        .toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                  }
                  return null;
                })
                .map((student) => {
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
                          <Grid item>
                            <StudentModal
                              modalType="accept"
                              studentId={student.id}
                              confirmHandler={activateHandler}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                      <TableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <StudentModal
                              modalType="decline"
                              studentId={student.id}
                              confirmHandler={declineHandler}
                            />
                          </Grid>
                        </Grid>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
