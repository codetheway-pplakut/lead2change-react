import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Grid,
  styled,
  Paper,
  Tab,
  Tabs,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TableContainer,
  tableCellClasses,
  TableSortLabel,
  TextField,
  Stack,
} from '@mui/material';
import StudentListModal from './StudentListModal';
import InactivationModal from './Modals/DeactivateCoachModal';
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
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#004cbb',
    color: theme.palette.common.white,
    textColor: theme.palette.common.white,
  },
  // [`&.${tableCellClasses.body}`]: { },
}));
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
          <StyledTableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ color: 'white' }}
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
        <StyledTableCell padding="normal">Options</StyledTableCell>
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
  const { rows, addFunction, updateFunction, unassignFunction } = props;
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [searchTerm, setSearchTerm] = React.useState('');
  const [sortActive, setSortActive] = React.useState(true);
  const [value, setValue] = React.useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // Changes from Active to Inactive and VV.
  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      setSortActive(true);
    }
    if (newValue === 1) {
      setSortActive(false);
    }
  };
  return (
    <Box sx={{ width: '100%', height: '60%' }}>
      <Grid container>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <AppBar
              position="static"
              sx={{
                bgcolor: '#004cbb',
                mt: '2vh',
                borderTopLeftRadius: 5,
                borderTopRightRadius: 5,
                width: '20vw',
                minWidth: '175px',
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
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
              </Tabs>
            </AppBar>
            <div>
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  value={searchTerm}
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
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                  }}
                />
                <div sx={{ minWidth: '200px' }}>
                  <RegisterCoachModal
                    minWidth="1200px"
                    addFunction={addFunction}
                  />
                </div>
              </Stack>
            </div>
          </Stack>
        </Grid>
      </Grid>
      <TableContainer component={Paper} sx={{ height: '68vh' }}>
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
              .filter((coach) =>
                coach.coachFirstName
                  .concat(coach.coachLastName)
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((coach, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={coach.id}>
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
                                unassignFunction={unassignFunction}
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
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

CoachesList.propTypes = {
  rows: PropTypes.array.isRequired,
  addFunction: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
  unassignFunction: PropTypes.func.isRequired,
};
