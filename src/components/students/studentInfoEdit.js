import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';

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
  const { updateFunction, onSaveClick, onCancelClick, students } = props;
  const [enteredFirstName, setEnteredFirstName] = React.useState(
    students.studentFirstName
  );
  const [enteredLastName, setEnteredLastName] = React.useState(
    students.studentLastName
  );
  const [enteredDateOfBirth, setEnteredDateOfBirth] = React.useState(
    students.studentDateOfBirth
  );
  const [enteredEmail, setEnteredEmail] = React.useState(students.studentEmail);
  const [enteredCellPhone, setEnteredCellPhone] = React.useState(
    students.studentCellPhone
  );
  const [enteredAddress, setEnteredAddress] = React.useState(
    students.studentAddress
  );
  const [enteredApartmentNumber, setEnteredApartmentNumber] = React.useState(
    students.studentApartmentNumber
  );
  const [enteredState, setEnteredState] = React.useState(students.studentState);
  const [enteredZipCode, setEnteredZipCode] = React.useState(
    students.studentZipCode
  );

  const EditField = () => {
    students.studentFirstName = enteredFirstName;
    students.studentLastName = enteredLastName;
    students.studentDateOfBirth = enteredDateOfBirth;
    students.studentEmail = enteredEmail;
    students.studentCellPhone = enteredCellPhone;
    students.studentAddress = enteredAddress;
    students.studentApartmentNumber = enteredApartmentNumber;
    students.studentState = enteredState;
    students.studentZipCode = enteredZipCode;
    updateFunction(students);
  };

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
                    label="First Name"
                    onChange={(e) => {
                      setEnteredFirstName(e.target.value);
                    }}
                    focused
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item marginBottom={2} marginTop={1}>
                  <TextField
                    size="small"
                    value={enteredLastName}
                    label="Last Name"
                    onChange={(e) => {
                      setEnteredLastName(e.target.value);
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
  students: PropTypes.object.isRequired,
};
