import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import StudentListModal from './StudentListModal';
import InactivationModal from './Modals/InactivateCoachModal';
import EditCoachModal from './Modals/EditCoachModal';
import ReactivationModal from './Modals/ActivateCoachModal';
import RegisterCoachModal from './Modals/RegisterCoachModal';

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
    id: 'coachLastName',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'coachEmail',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'coachPhoneNumber',
    numeric: false,
    disablePadding: false,
    label: 'Phone Number',
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
        <TableCell padding="normal">Options</TableCell>
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default function CoachesList(props) {
  const { rows, addFunction, updateFunction } = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState(rows);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortActive, setSortActive] = React.useState(true);

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
      setSortActive(true);
    }
    if (newValue === 1) {
      setSortActive(false);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emptyRows =
    page > 0
      ? Math.max(
          0,
          (1 + page) * rowsPerPage -
            rows.filter((item) => item.active === sortActive).length
        )
      : 0;

  return (
    <Paper sx={{ width: '100%' }}>
      <Grid container alignItems="center">
        <Grid item xs={8}>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="Active" />
                <Tab label="Inactive" />
              </Tabs>
            </Grid>
            <Grid item xs={6}>
              <TextField
                value={searchTerm}
                placeholder="Search..."
                variant="outlined"
                size="small"
                margin="normal"
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
          </Grid>
        </Grid>
        <Grid item xs={4} align="right" padding={2}>
          <RegisterCoachModal addFunction={addFunction} />
        </Grid>
      </Grid>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <EnhancedTableHead
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(
              rows.filter((item) => item.active === sortActive),
              getComparator(order, orderBy)
            )
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .filter((coach) =>
                coach.coachFirstName
                  .concat(coach.coachLastName)
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((coach, index) => {
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, coach.id)}
                    tabIndex={-1}
                    key={coach.id}
                  >
                    <TableCell>
                      {coach.coachLastName}, {coach.coachFirstName}
                    </TableCell>
                    <TableCell align="left">{coach.coachEmail}</TableCell>
                    <TableCell align="left">{coach.coachPhoneNumber}</TableCell>
                    <TableCell>
                      <Grid container spacing={2}>
                        {sortActive === true && (
                          <>
                            <Grid item>
                              <StudentListModal coach={coach} />
                            </Grid>
                            <Grid item>
                              <InactivationModal
                                updateFunction={updateFunction}
                                coach={coach}
                              />
                            </Grid>
                            <Grid item>
                              <EditCoachModal
                                updateFunction={updateFunction}
                                coach={coach}
                              />
                            </Grid>
                          </>
                        )}
                        {sortActive === false && (
                          <>
                            {/* <Grid item>
                                <CoachDeletionModal
                                  deleteFunction={deleteFunction}
                                  coach={coach}
                                />
                              </Grid> */}
                            <Grid item>
                              <ReactivationModal
                                updateFunction={updateFunction}
                                coach={coach}
                              />
                            </Grid>
                          </>
                        )}
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.filter((item) => item.active === sortActive).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

CoachesList.propTypes = {
  rows: PropTypes.array.isRequired,
  addFunction: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
};
