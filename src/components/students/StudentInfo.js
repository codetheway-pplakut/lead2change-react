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
    <Grid container>
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
            <Button
              style={{ float: 'right' }}
              variant="contained"
              onClick={onEditClick}
            >
              Edit
            </Button>
          </Grid>
          <Grid style={{ margin: '2vh' }}>
            <StudentInfo>
              <h3>Name: Aaditya Tiwari</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Date of Birth: 02/04/2006, Age 16</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Email Address: tiwariA@gmail.com</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Phone Number: 231-381-4814</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Home Address: 12345 Demo street</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Apt. #: 42</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>State: WI</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Zip Code: 50021</h3>
            </StudentInfo>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <TabsFunction />
      </Grid>
    </Grid>
  );
}

SignUpDisplay.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};

function SignUpEdit(props) {
  const { onSaveClick, onCancelClick } = props;
  return (
    <Grid container>
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
        <h1>Aadi&rsquo;s Details</h1>
      </Grid>
      <Grid container item xs={4}>
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
          >
            <h2>Student Info</h2>
          </Grid>
          <Grid container style={{ marginLeft: '2vh' }}>
            <StudentInfo>
              <Grid item marginBottom={2} marginTop={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="Aaditya Tiwari"
                  label="Name"
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
                />
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="16"
                  label="Age"
                  type="number"
                  style={{ width: 100 }}
                />
              </Grid>
            </StudentInfo>
            <StudentInfo>
              <Grid item marginBottom={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="tiwari.aadi@gmail.com"
                  label="Email Adress"
                />
              </Grid>
            </StudentInfo>
            <StudentInfo>
              <Grid item marginBottom={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="414-244-9848"
                  label="Phone Number"
                />
              </Grid>
            </StudentInfo>
            <StudentInfo>
              <Grid item marginBottom={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="12345 demo street"
                  label="Home Adress"
                />
              </Grid>
            </StudentInfo>
            <StudentInfo>
              <Grid item marginBottom={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="42"
                  label="Apt. #"
                />
              </Grid>
            </StudentInfo>
            <StudentInfo>
              <Grid item marginBottom={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="WI"
                  label="State"
                />
              </Grid>
            </StudentInfo>
            <StudentInfo>
              <Grid item marginBottom={2}>
                <TextField
                  size="small"
                  className="typing-container"
                  defaultValue="50021"
                  label="Zip Code"
                />
              </Grid>
            </StudentInfo>
          
          </Grid>

          <Grid align="right">
            <Button variant="contained" onClick={onSaveClick}>
              Save
            </Button>
             <Button variant="contained" onClick={onCancelClick}>
                Cancel
              </Button>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={8}>
        <TabsFunction />
      </Grid>
    </Grid>
  );
}

SignUpEdit.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default function ResponsiveGrid(props) {
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

  const onSaveClick = () => {
    saveStudentInfo();
    endEditing();
  };

  const onCancelClick = () => {
    cancelStudentInfo();
    cancelEditing();
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
        <SignUpEdit onSaveClick={onSaveClick} onCancelClick={onCancelClick} />
      ) : (
        <SignUpDisplay onEditClick={startEditing} />
      )}
    </Grid>
  );
}
