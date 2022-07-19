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
import { experimentalStyled as styled } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import TabsFunction from './detailsTab';
import ROUTES from '../../constants/routes';

import TabsFunction from './detailsTab';

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

function SignUpDisplay() {
  return (
    <div>
      DISPLAY
      <Button variant ="contained">Edit</Button>
      <ul>
        <li>Test</li>
        <li>Test</li>
      </ul>
    </div>
  );
}

function SignUpEdit() {
  return (
    <div>
      DISPLAY
      <h3>EDIT</h3>
      <ul>
        <li>Test</li>
        <li>Test</li>
      </ul>
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
    console.log('save');
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isEditing ? (
          <SignUpEdit onSaveClick={onSaveClick} />
        ) : (
          <SignUpDisplay onEditClick={startEditing} />
        )}
      </Box>

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
        <h1>Aadi&rsquo;S DETAILS</h1>
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
                    onChange={handleChange}
                    className="typing-container"
                    disabled={!disabled}
                    defaultValue="Aadi"
                    label="First Name"
                  />
                </b>
                <button allign="right" type="submit" onClick={handleGameClick}>
                  {' '}
                  Edit{' '}
                </button>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  <TextField
                    className="typing-container"
                    disabled={!disabled}
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
                    disabled={!disabled}
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
                    disabled={!disabled}
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
                    disabled={!disabled}
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
                    disabled={!disabled}
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
                    disabled={!disabled}
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
                    disabled={!disabled}
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
                    disabled={!disabled}
                    label="State"
                    defaultValue="Aadi"
                  />{' '}
                </b>
              </h3>
            </StudentInfo>
          </Grid>
        </Paper>
        <Button
          variant="outlined"
          size="small"
          justify="left"
          onClick={onBackClick}
          sx={{ mt: '1vh', ml: '17vh' }}
        >
          {buttonText}
        </Button>
      </Grid>
      <Grid item xs={8}>
        <TabsFunction />
      </Grid>
    </Grid>
  );
}
