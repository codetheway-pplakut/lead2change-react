/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState, useRef } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import TabsFunction from './detailsTab';
import ROUTES from '../../constants/routes';

const StudentInfo = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 0.1,
  m: 0.1,
  bgcolor: 'background.paper',
  borderRadius: 1,
}));

function SignUpDisplay(props) {
  const { onEditClick } = props;
  return (
    <div>
      DISPLAY
      <Button variant="contained" onClick={onEditClick}>
        Edit
      </Button>
      <StudentInfo>
        <h3>
          <b>
            <h3>First Name: Aadi</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Last Name: Tiwari</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Date: 10/13/2021</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Age: 16</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Email: aadi@gmail.com</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Phone Number: 414-414-144</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Home Adress: Aadi</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Apt. #: Aadi</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>Zip Code: 50203</h3>
          </b>
        </h3>
      </StudentInfo>
      <StudentInfo>
        <h3>
          <b>
            <h3>State: Wisconsin</h3>
          </b>
        </h3>
      </StudentInfo>
      <Grid item xs={8}>
        <TabsFunction />
      </Grid>
    </div>
  );
}

SignUpDisplay.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};

function SignUpEdit(props) {
  const { onSaveClick } = props;
  return (
    <div>
      DISPLAY
     
      <Grid container>
        <Grid
          item
          align="center"
          style={{
            backgroundColor: '#2656A5',
            marginBottom: '3vh',
            color: '#FFFFFF',
            padding: '0vh',
          }}
          sx={{ width: '100%' }}
        >
          <h1>Aadi&rsquo;s Details</h1>
        </Grid>
        <Grid item xs={4}>
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
            <Grid style={{ marginLeft: '2vh' }}>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      defaultValue="Aadi"
                      label="First Name"
                    />
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      label="Last Name"
                      defaultValue="Tiwari"
                    />{' '}
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      type="date"
                      label="Date of Birth"
                      defaultValue="Aadi"
                    />
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      type="number"
                      label="Age"
                      defaultValue="16"
                    />{' '}
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      label="Email Adress"
                      defaultValue="Aadi"
                    />
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>Phone Number: 901-234-5678 </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      label="Home Adress"
                      defaultValue="Aadi"
                    />{' '}
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      label="Apt. #"
                      defaultValue="Aadi"
                    />
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      label="Zip Code"
                      defaultValue="Aadi"
                    />
                  </b>
                </h3>
              </StudentInfo>
              <StudentInfo>
                <h3>
                  <b>
                    <TextField
                      className="typing-container"
                      label="State"
                      defaultValue="Aadi"
                    />{' '}
                  </b>
                </h3>
              </StudentInfo>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={8}>
        <TabsFunction />
      </Grid>
      <Button variant="contained" onClick={onSaveClick}>
        Save
      </Button>
    </div>
  );
}

SignUpEdit.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
};

export default function ResponsiveGrid(props) {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    console.log(studentInfo);
  };

  const onSaveClick = () => {
    saveStudentInfo();
    endEditing();
  };

  const num = 0;
  const onBackClick = () => {
    navigate(ROUTES.STUDENT_TEST);
  };
  const navigate = useNavigate();
  const buttonText = '< Back to table';

  const [disabled, setDisabled] = useState(false);

  const [textInputName, setTextInputName] = useState('');

  function handleGameClick() {
    setDisabled(!disabled);

    event.preventDefault();

    if (message.trim().length !== 0) {
      console.log('input value is NOT empty');
    } else {
      console.log('input value is empty');
    }
  }

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <Grid container>
      {isEditing ? (
        <SignUpEdit onSaveClick={onSaveClick} />
      ) : (
        <SignUpDisplay onEditClick={startEditing} />
      )}
    </Grid>
  );
}
