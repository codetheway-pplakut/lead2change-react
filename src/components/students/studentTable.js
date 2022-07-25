import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

import StudentRegistryModal from './studentRegistryModal';
import StudentModal from './studentModal';
import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
} from '../../services/students/students';
import getCoachById from '../../services/coaches/coaches';

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

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
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

const headCells = [
  {
    id: 'name',
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
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
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
        <TableCell padding="normal"> </TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function StudentTable() {
  const [students, setStudents] = useState([]);

  const refreshStudents = async () => {
    const result = await getStudents();
    setStudents(result);
  };

  useEffect(() => {
    refreshStudents();
  }, []);

  const newStudent = async (first, last, emailAddress, phoneNumber) => {
    const student = {
      firstName: first,
      lastName: last,
      email: emailAddress,
      phone: phoneNumber,
    };
    await addStudent(student);
    await refreshStudents();
  };
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState(students);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortState, setSortState] = React.useState('');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setSortState('active');
    }
    if (newValue === 1) {
      setSortState('inactive');
    }
    if (newValue === 2) {
      setSortState('applied');
    }
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={8}>
          <Tabs value={value} onChange={handleChange}>
            <Tab label="Active" />
            <Tab label="Inactive" />
            <Tab label="Applied" />
          </Tabs>
        </Grid>
        <Grid item xs={2}>
          <TextField
            value={searchTerm}
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
              setSearchTerm(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={2} align="right" padding={2}>
          <StudentRegistryModal />
        </Grid>
      </Grid>
      <TableContainer>
        <Table sx={{ minWidth: 750 }}>
          <EnhancedTableHead
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
                  .includes(searchTerm.toLowerCase())
              )
              .map((student, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, student.id)}
                    tabIndex={-1}
                    key={student.id}
                  >
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
                          <>
                            <Grid item>wip</Grid>
                            <Grid item>
                              <StudentModal type="Deactivate" />
                            </Grid>
                            <Grid item>wip</Grid>
                          </>
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
        </Table>
      </TableContainer>
    </Paper>
  );
}
