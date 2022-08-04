import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Link,
  Stack,
  styled,
  Tab,
  Tabs,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

import { useNavigate } from 'react-router';
import ROUTES from '../../constants/routes';

import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

import CoachAssignModal from './student-assign-coach-modal';
import StudentModal from './student-modal';
import {
  getStudents,
  getStudentById,
  updateStudent,
  assignStudent,
  unassignStudent,
} from '../../services/students/students';
import { getCoachById, getCoaches } from '../../services/coaches/coaches';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#004cbb',
    color: theme.palette.common.white,
    textColor: theme.palette.common.white,
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

const StyledButton = styled(Button)({
  backgroundColor: '#004cbb',
  '&:hover': {
    backgroundColor: '#005ade',
  },
});

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

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
    id: 'deactivate',
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
    id: 'reactivate',
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
  {},
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, headCells } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <StyledTableRow>
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                '&.MuiTableSortLabel-root': {
                  color: 'white',
                },
                '&.MuiTableSortLabel-root:hover': {
                  color: 'white',
                },
                '&.Mui-active': {
                  color: 'white',
                },
                '& .MuiTableSortLabel-icon': {
                  color: 'white !important',
                },
              }}
            >
              {headCell.label}
            </TableSortLabel>
          </StyledTableCell>
        ))}
      </StyledTableRow>
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
  const [coaches, setCoaches] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [search, setSearch] = React.useState('');

  const reassignCoachHandler = async (studentsId, coachsId) => {
    const updatedStudent = await getStudentById(studentsId);
    if (coachsId === 'Unassigned' && updatedStudent.coachId !== null) {
      await unassignStudent({
        coachId: updatedStudent.coachId,
        studentId: studentsId,
      });
    } else if (coachsId !== 'Unassigned') {
      await assignStudent({ coachId: coachsId, studentId: studentsId });
    }
    refreshStudents();
  };
  const deactivateHandler = async (studentsId) => {
    const updatedStudent = await getStudentById(studentsId);
    updatedStudent.state = 'inactive';
    await updateStudent(updatedStudent);
    unassignStudent({ coachId: updatedStudent.coachId, studentId: studentsId });
    refreshStudents();
  };

  const activateHandler = async (studentId) => {
    const updatedStudent = await getStudentById(studentId);
    updatedStudent.state = 'active';
    await updateStudent(updatedStudent);
    refreshStudents();
  };

  const declineHandler = async (studentId) => {
    const updatedStudent = await getStudentById(studentId);
    updatedStudent.state = 'rejected';
    await updateStudent(updatedStudent);
    refreshStudents();
  };

  const refreshCoaches = async () => {
    const response = await getCoaches();
    setCoaches(response);
  };
  useEffect(() => {
    refreshCoaches();
  }, []);
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
  const [orderBy, setOrderBy] = React.useState('lastName');

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
      <Grid container>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <AppBar
              position="static"
              elevation={0}
              sx={{
                bgcolor: '#004cbb',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                width: '30vw',
                minWidth: '275px',
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                textColor="inherit"
                TabIndicatorProps={{
                  style: { transition: 'none', background: '#004cbb' },
                }}
                variant="fullWidth"
              >
                <Tab
                  label="Active"
                  sx={{
                    borderRight: 1,
                    borderBottom: 2,
                    borderColor: '#6f8abd',
                  }}
                  disableRipple
                />
                <Tab
                  label="Inactive"
                  sx={{
                    borderRight: 1,
                    borderLeft: 1,
                    borderBottom: 2,
                    borderColor: '#6f8abd',
                  }}
                  disableRipple
                />
                <Tab
                  label="Applicants"
                  sx={{
                    borderLeft: 1,
                    borderBottom: 2,
                    borderColor: '#6f8abd',
                  }}
                  disableRipple
                />
              </Tabs>
            </AppBar>
            <div>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  value={search}
                  placeholder="Search..."
                  variant="outlined"
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => {
                    onSearchChange(event.target.value);
                  }}
                />
                <div sx={{ minWidth: '200px' }}>
                  <StyledButton
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={onRegisterClick}
                  >
                    Student
                  </StyledButton>
                </div>
              </Stack>
            </div>
          </Stack>
        </Grid>
      </Grid>
      <TabPanel value={tabValue} index={0}>
        <TableContainer sx={{ height: '65vh', bgcolor: 'white' }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            stickyHeader
          >
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
                      getCoachById(post.coachId).coachFirstName !== undefined &&
                      getCoachById(post.coachId)
                        .coachFirstName.toLowerCase()
                        .includes(search.toLowerCase())
                    ) {
                      return post;
                    }
                    if (
                      post.coachId !== null &&
                      getCoachById(post.coachId).coachFirstName !== undefined &&
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
                    <StyledTableRow tabIndex={0} key={student.id}>
                      <StyledTableCell>
                        <Link
                          sx={{
                            '&:hover': {
                              cursor: 'pointer',
                            },
                          }}
                          onClick={() => navigate(`/StudentInfo/${student.id}`)}
                        >
                          {student.lastName}, {student.firstName}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {student.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {student.studentCellPhone}
                      </StyledTableCell>
                      <StyledTableCell>
                        <CoachAssignModal
                          studentId={student.id}
                          coachId={student.coachId}
                          confirmHandler={reassignCoachHandler}
                          coaches={coaches}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <StudentModal
                              modalType="Deactivate"
                              modalMessage="Are you sure you want to deactivate this student?"
                              studentId={student.id}
                              confirmHandler={deactivateHandler}
                            />
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <TableContainer sx={{ height: '65vh', bgcolor: 'white' }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            stickyHeader
          >
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
                    <StyledTableRow tabIndex={0} key={student.id}>
                      <StyledTableCell>
                        <Link
                          sx={{
                            '&:hover': {
                              cursor: 'pointer',
                            },
                          }}
                          onClick={() => navigate(`/StudentInfo/${student.id}`)}
                        >
                          {student.lastName}, {student.firstName}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {student.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {student.studentCellPhone}
                      </StyledTableCell>

                      <StyledTableCell />
                      <StyledTableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <StudentModal
                              modalType="Reactivate"
                              studentId={student.id}
                              confirmHandler={activateHandler}
                              modalMessage="Are you sure you want to reactivate this student?"
                            />
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <TableContainer sx={{ height: '65vh', bgcolor: 'white' }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            stickyHeader
          >
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
                    <StyledTableRow tabIndex={0} key={student.id}>
                      <StyledTableCell>
                        <Link
                          sx={{
                            '&:hover': {
                              cursor: 'pointer',
                            },
                          }}
                          onClick={() => navigate(`/StudentInfo/${student.id}`)}
                        >
                          {student.lastName}, {student.firstName}
                        </Link>
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {student.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        {student.studentCellPhone}
                      </StyledTableCell>
                      <StyledTableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <StudentModal
                              modalType="Accept"
                              studentId={student.id}
                              confirmHandler={activateHandler}
                              modalMessage="Are you sure you want to accept this student?"
                            />
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Grid container spacing={2}>
                          <Grid item>
                            <StudentModal
                              modalType="Decline"
                              modalMessage="Are you sure you want to decline this student?"
                              studentId={student.id}
                              confirmHandler={declineHandler}
                            />
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                      <StyledTableCell>
                        <StyledButton
                          onClick={() =>
                            navigate(`/interview-page/${student.id}`)
                          }
                          variant="contained"
                        >
                          Interviews
                        </StyledButton>
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
    </Box>
  );
}
