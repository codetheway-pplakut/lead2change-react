import * as React from 'react';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';
import {
  styled,
  Link,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import { useNavigate } from 'react-router';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ColorButton from './Shared/ColoredButton';

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
    id: 'studentLastName',
    numeric: false,
    disablePadding: false,
    label: 'Name',
  },
  {
    id: 'studentEmail',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'studentPhoneNumber',
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
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function StudentListModal(props) {
  const { coach } = props;
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  if (coach.students === null) {
    coach.students = [];
  }

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (name) => {
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
  return (
    <div>
      <ColorButton onClick={handleOpen} variant="contained">
        Student List
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Grid container variant="large">
          <Grid container>
            <Grid item sx={{ bgcolor: '#2656A5', color: 'white' }} xs={12}>
              <Grid container>
                <Grid item xs={2} />
                <Grid item xs={8} sx={{ margin: 2 }}>
                  <Typography variant="h5" component="h2" align="center">
                    {coach.coachFirstName} {coach.coachLastName}&#39;s Students
                    ({coach.students.length})
                  </Typography>
                </Grid>
                <Grid item sx={{ margin: 1.5 }}>
                  <IconButton
                    align="right"
                    size="medium"
                    onClick={handleClose}
                    sx={{ color: 'white' }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Paper sx={{ width: '100%' }}>
            <TableContainer sx={{ height: '40vh' }}>
              <Table aria-labelledby="tableTitle" stickyHeader>
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                  rowCount={coach.students.length}
                />
                <TableBody>
                  {stableSort(
                    coach.students,
                    getComparator(order, orderBy)
                  ).map((student, index) => {
                    return (
                      <StyledTableRow
                        hover
                        onClick={(event) => handleClick(event, student.id)}
                        tabIndex={-1}
                        key={student.id}
                      >
                        <TableCell>
                          <Link
                            sx={{
                              '&:hover': {
                                cursor: 'pointer',
                              },
                            }}
                            onClick={() =>
                              navigate(`/StudentInfo/${student.id}`)
                            }
                          >
                            {student.studentLastName},{' '}
                            {student.studentFirstName}
                          </Link>
                        </TableCell>
                        <TableCell align="left">
                          {student.studentEmail}
                        </TableCell>
                        <TableCell align="left">
                          {student.studentPhoneNumber}
                        </TableCell>
                      </StyledTableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Modal>
    </div>
  );
}
export default StudentListModal;

StudentListModal.propTypes = {
  coach: PropTypes.object.isRequired,
};
