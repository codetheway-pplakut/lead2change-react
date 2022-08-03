import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { TextField } from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';

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

export default function StudentInfoEdit(props) {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});
  const { updateFunction, onSaveClick, onCancelClick } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function currentStudentTest() {
    return getStudentById(studentId);
  }

  const [enteredFirstName, setEnteredFirstName] = React.useState(
    currentStudentTest.studentFirstName
  );
  const [enteredDateOfBirth, setEnteredDateOfBirth] = React.useState(
    currentStudentTest.studentDateOfBirth
  );
  const [enteredEmail, setEnteredEmail] = React.useState(
    currentStudentTest.studentEmail
  );
  const [enteredCellPhone, setEnteredCellPhone] = React.useState(
    currentStudentTest.studentCellPhone
  );
  const [enteredAddress, setEnteredAddress] = React.useState(
    currentStudentTest.studentAddress
  );
  const [enteredApartmentNumber, setEnteredApartmentNumber] = React.useState(
    currentStudentTest.studentApartmentNumber
  );
  const [enteredState, setEnteredState] = React.useState(
    currentStudentTest.studentState
  );
  const [enteredZipCode, setEnteredZipCode] = React.useState(
    currentStudentTest.studentZipCode
  );

  const EditField = () => {
    onSaveClick();
    handleClose();
    students.studentFirstName = enteredFirstName;
    students.studentDateOfBirth = enteredDateOfBirth;
    students.studentEmail = enteredEmail;
    students.studentCellPhone = enteredCellPhone;
    students.studentAddress = enteredAddress;
    students.studentApartmentNumber = enteredApartmentNumber;
    students.studentState = enteredState;
    students.studentZipCode = enteredZipCode;
    updateFunction(students);
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

StudentInfoEdit.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
};
