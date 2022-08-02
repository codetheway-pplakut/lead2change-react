import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';
import TabsFunction from './detailsTab';

import { getStudentById } from '../../services/students/students';

const StudentInfo = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 0.1,
  m: 0.1,
  bgcolor: 'background.paper',
  borderRadius: 1,
}));

function DisplayBanner() {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);
  return (
    <Grid
      item
      align="center"
      style={{
        backgroundColor: '#2656A5',
        marginBottom: '3vh',
        color: '#FFFFFF',
        padding: '0.1vh',
      }}
      sx={{ width: '100%' }}
    >
      <h1>
        {students.studentFirstName} {students.studentLastName}&rsquo;s Details
      </h1>
    </Grid>
  );
}

function SignUpDisplay(props) {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);
  const { onEditClick } = props;
  return (
    <Grid container>
      <Grid item xs={4}>
        <Paper
          sx={{
            '#1A2027': '#fff',
            textAlign: 'center',
            width: '50vh',
            mr: '10vh',
            height: '70vh',
            overflowY: 'auto',
          }}
          style={{ marginLeft: '3vh' }}
        >
          <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
            style={{ backgroundColor: '#2656A5', color: '#FFFFFF' }}
          >
            <h2>Student Info</h2>
          </Grid>
          <Grid marginRight={1} marginTop={1}>
            <ColorButton
              style={{ float: 'right' }}
              variant="contained"
              onClick={onEditClick}
            >
              Edit
            </ColorButton>
          </Grid>
          <Grid style={{ margin: '2vh' }}>
            <StudentInfo>
              <h3 component="span">
                Date of Birth: {'  '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentDateOfBirth}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3 component="span">
                Email Address:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentEmail}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3 component="span">
                Phone Number:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentCellPhone}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                Home Address:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentAddress}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                Apt. #:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentApartmentNumber}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                State:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentState}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                Zip Code:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentZipCode}
                </Box>
              </h3>
            </StudentInfo>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

SignUpDisplay.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};

function SignUpEdit(props) {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});
  const { onSaveClick, onCancelClick, updateFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [enteredFirstName, setEnteredFirstName] = React.useState('');
  const [enteredDateOfBirth, setEnteredDateOfBirth] = React.useState('');
  const [enteredEmail, setEnteredEmail] = React.useState('');
  const [enteredCellPhone, setEnteredCellPhone] = React.useState('');
  const [enteredAddress, setEnteredAddress] = React.useState('');
  const [enteredApartmentNumber, setEnteredApartmentNumber] =
    React.useState('');
  const [enteredState, setEnteredState] = React.useState('');
  const [enteredZipCode, setEnteredZipCode] = React.useState('');

  const EditField = () => {
    handleClose();
    const updatedStudent = {
      id: students.id, // TODO : Update to agreed ID creation method
      studentFirstName: enteredFirstName,
      studentDateOfBirth: enteredDateOfBirth,
      studentEmail: enteredEmail,
      studentCellPhone: enteredCellPhone,
      studentAddress: enteredAddress,
      studentApartmentNumber: enteredApartmentNumber,
      studentState: enteredState,
      studentZipCode: enteredZipCode,
    };
    updateFunction(updatedStudent);
  };

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);

      const {
        studentFirstName,
        studentEmail,
        studentDateOfBirth,
        studentCellPhone,
        studentAddress,
        studentApartmentNumber,
        studentState,
        studentZipCode,
      } = currStudent;
      setStudents(currStudent);

      setEnteredFirstName(studentFirstName);
      setEnteredDateOfBirth(studentDateOfBirth);
      setEnteredEmail(studentEmail);
      setEnteredCellPhone(studentCellPhone);
      setEnteredApartmentNumber(studentApartmentNumber);
      setEnteredAddress(studentAddress);
      setEnteredState(studentState);
      setEnteredZipCode(studentZipCode);
    };
    currentStudent();
  }, [studentId]);

  return (
    <Grid container>
      <form onSubmit={onSaveClick}>
        <Grid>
          <Paper
            sx={{
              backgroundColor: 'dark',
              '#1A2027': '#fff',
              textAlign: 'center',
              color: 'secondary',
              width: '50vh',
              mr: '10vh',
              height: '70vh',
              overflowY: 'auto',
            }}
            style={{ marginLeft: '3vh' }}
          >
            <Grid
              container
              spacing={0}
              align="center"
              justify="center"
              direction="column"
              style={{ backgroundColor: '#2656A5', color: '#FFFFFF' }}
              marginBottom={2}
            >
              <h2>Student Info</h2>
            </Grid>
            <Grid container style={{ marginLeft: '2vh' }} direction="column">
              <StudentInfo>
                <Grid item marginBottom={2} marginTop={1}>
                  <TextField
                    size="small"
                    value={enteredFirstName}
                    label="Name"
                    onChange={(e) => {
                      setEnteredFirstName(e.target.value);
                    }}
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2}>
                  <TextField
                    size="small"
                    className="typing-container"
                    label="Date of Birth"
                    type="date"
                    value={enteredDateOfBirth}
                    onChange={(e) => setEnteredDateOfBirth(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredEmail}
                    label="Email Adress"
                    onChange={(e) => setEnteredEmail(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredCellPhone}
                    label="Cell Phone Number"
                    onChange={(e) => setEnteredCellPhone(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredAddress}
                    label="Home Address"
                    onChange={(e) => setEnteredAddress(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredApartmentNumber}
                    label="Apt. #"
                    onChange={(e) => setEnteredApartmentNumber(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredState}
                    label="State"
                    onChange={(e) => setEnteredState(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredZipCode}
                    label="Zip Code"
                    onChange={(e) => setEnteredZipCode(e.target.value)}
                    required
                    focused
                  />
                </Grid>
              </StudentInfo>
            </Grid>

            <Grid align="center" marginTop={7}>
              <ColorButton
                variant="contained"
                type="Submit"
                onClick={EditField}
              >
                Save
              </ColorButton>
              {'   '}
              <ColorButton variant="contained" onClick={onCancelClick}>
                Cancel
              </ColorButton>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Grid>
  );
}

SignUpEdit.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
};

export default function ResponsiveGrid(props) {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);

  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    console.log(studentInfo);
  };

  const cancelStudentInfo = (studentInfo) => {
    console.log('cancel');
  };

  const onSaveClick = (event) => {
    saveStudentInfo();
    endEditing();
    event.preventDefault();
  };

  const onCancelClick = () => {
    cancelStudentInfo();
    cancelEditing();
  };

  return (
    <Grid container>
      <DisplayBanner />
      <Stack direction="row" spacing={2}>
        {isEditing ? (
          <SignUpEdit onSaveClick={onSaveClick} onCancelClick={onCancelClick} />
        ) : (
          <SignUpDisplay onEditClick={startEditing} />
        )}
        <TabsFunction />
      </Stack>
    </Grid>
  );
}
