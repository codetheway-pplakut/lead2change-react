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

export default function StudentTable() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [search, setSearch] = useState('');
  const [students, setStudents] = useState([]);
  const [value, setValue] = useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleTabChange = () => {

  };

  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={8}>
          <Tabs value={value} onChange={handleTabChange}>
            <Tab label="Active" />
            <Tab label="Inactive" />
            <Tab label="Applied" />
          </Tabs>
        </Grid>
        <Grid item xs={2}>
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
        </Grid>
        <Grid item xs={2} align="right" padding={2}>
          <StudentRegistryModal />
        </Grid>
      </Grid>
      <TableContainer>
        <Table sx={{ minWidth: 750 }}>
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
    </Paper>
  );
}