import React from 'react';
import {
  experimentalStyled as styled,
  createTheme,
} from '@mui/material/styles';

import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
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
  const { updateFunction, onDoneClick, students } = props;

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
      <form onSubmit={onDoneClick}>
        <Grid>
          <Paper
            sx={{
              '#1A2027': '#fff',
              textAlign: 'center',
              width: '70vh',
              mr: '10vh',
              height: '90vh',
              overflowY: 'auto',
              marginLeft: '30px',
              marginRight: '20px',
            }}
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
            <Grid container>
              <Grid
                container
                style={{ marginLeft: '2vh' }}
                direction="column"
                spacing="10px"
                justifyContent="center"
                align="center"
              >
                <Grid item>
                  <Grid container>
                    <Grid item xs={6}>
                      <StudentInfo>
                        <Grid item marginBottom={1} marginTop={1}>
                          <TextField
                            size="small"
                            value={enteredFirstName}
                            label="First Name"
                            sx={{ width: '170px' }}
                            onChange={(e) => {
                              setEnteredFirstName(e.target.value);
                            }}
                            focused
                          />
                        </Grid>
                      </StudentInfo>
                    </Grid>
                    <Grid item xs={6}>
                      <StudentInfo>
                        <Grid item marginBottom={1} marginTop={1}>
                          <TextField
                            size="small"
                            value={enteredLastName}
                            label="Last Name"
                            sx={{ width: '170px' }}
                            onChange={(e) => {
                              setEnteredLastName(e.target.value);
                            }}
                            focused
                          />
                        </Grid>
                      </StudentInfo>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={6}>
                      <StudentInfo>
                        <Grid item marginBottom={1}>
                          <TextField
                            size="small"
                            className="typing-container"
                            label="Date of Birth"
                            type="date"
                            sx={{ width: '170px' }}
                            value={enteredDateOfBirth}
                            onChange={(e) =>
                              setEnteredDateOfBirth(e.target.value)
                            }
                            required
                            focused
                          />
                        </Grid>
                      </StudentInfo>
                    </Grid>
                    <Grid item xs={6}>
                      <StudentInfo>
                        <Grid item marginBottom={1}>
                          <TextField
                            size="small"
                            className="typing-container"
                            value={enteredCellPhone}
                            label="Cell Phone Number"
                            sx={{ width: '170px' }}
                            onChange={(e) =>
                              setEnteredCellPhone(e.target.value)
                            }
                            required
                            focused
                          />
                        </Grid>
                      </StudentInfo>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item>
                  <StudentInfo>
                    <Grid item marginBottom={1}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredEmail}
                        sx={{ width: '361px' }}
                        label="Email Address"
                        onChange={(e) => setEnteredEmail(e.target.value)}
                        required
                        focused
                        fullWidth
                      />
                    </Grid>
                  </StudentInfo>
                </Grid>
                <Grid item>
                  <StudentInfo>
                    <Grid item marginBottom={1}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredAddress}
                        sx={{ width: '361px' }}
                        label="Home Address"
                        onChange={(e) => setEnteredAddress(e.target.value)}
                        required
                        focused
                      />
                    </Grid>
                  </StudentInfo>
                </Grid>
                <Grid item>
                  <StudentInfo>
                    <Grid item marginBottom={1}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredApartmentNumber}
                        label="Apt. #"
                        sx={{ width: '361px' }}
                        onChange={(e) =>
                          setEnteredApartmentNumber(e.target.value)
                        }
                        focused
                      />
                    </Grid>
                  </StudentInfo>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={6}>
                      <StudentInfo>
                        <Grid item marginBottom={0}>
                          <TextField
                            size="small"
                            className="typing-container"
                            value={enteredState}
                            label="State"
                            sx={{ width: '170px' }}
                            onChange={(e) => setEnteredState(e.target.value)}
                            required
                            focused
                          />
                        </Grid>
                      </StudentInfo>
                    </Grid>
                    <Grid item xs={6}>
                      <StudentInfo>
                        <Grid item>
                          <TextField
                            size="small"
                            className="typing-container"
                            value={enteredZipCode}
                            label="Zip Code"
                            sx={{ width: '170px' }}
                            onChange={(e) => setEnteredZipCode(e.target.value)}
                            required
                            focused
                          />
                        </Grid>
                      </StudentInfo>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid alignItems="center" marginTop={7}>
                <ColorButton
                  variant="contained"
                  type="Submit"
                  onClick={EditField}
                >
                  Save
                </ColorButton>
                {'   '}
                <ColorButton variant="contained" onClick={onDoneClick}>
                  Cancel
                </ColorButton>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </Grid>
  );
}

StudentInfoEdit.propTypes = {
  onDoneClick: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
  students: PropTypes.object.isRequired,
};
