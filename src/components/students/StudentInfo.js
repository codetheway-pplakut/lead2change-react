/* eslint-disable no-undef */
/* eslint-disable no-useless-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState, useRef } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

import { useNavigate, useParams } from 'react-router-dom';
import { Stack, TextField } from '@mui/material';
import TabsFunction from './detailsTab';
import ROUTES from '../../constants/routes';

import {
  getStudents,
  getStudentById,
  updateStudent,
} from '../../services/students/students';

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

const GridText = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function DisplayBanner() {
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

  const navigate = useNavigate();
  const buttonText = '< Back to table';
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
      <h1>Aadi&rsquo;s Details</h1>
    </Grid>
  );
}



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
        <h1>
          {students.studentFirstName} {students.studentLastName}&rsquo;s Details
        </h1>
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
              <h3>Date of Birth: {students.studentDateOfBirth} </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Email Address: {students.studentEmail}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Phone Number: {students.studentCellPhone}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Home Address: {students.studentAddress}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Apt. #: {students.studentApartmentNumber}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>State: {students.studentState}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Zip Code: {students.studentZipCode}</h3>
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
  const { onSaveClick, onCancelClick } = props;
  const [first, setFirst] = useState('');
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
                    className="typing-container"
                    defaultValue="Aaditya Tiwari"
                    label="Name"
                    onChange={(event) => setFirst(event.target.value)}
                    required
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
                    defaultValue="2017-05-24"
                    onChange={(event) => setFirst(event.target.value)}
                    required
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
                    onChange={(event) => setFirst(event.target.value)}
                    required
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
                    onChange={(event) => setFirst(event.target.value)}
                    required
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
                    onChange={(event) => setFirst(event.target.value)}
                    required
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
                    onChange={(event) => setFirst(event.target.value)}
                    required
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
                    onChange={(event) => setFirst(event.target.value)}
                    required
                  />
                </Grid>
              </StudentInfo>
              <StudentInfo>
                <Grid item>
                  <TextField
                    size="small"
                    className="typing-container"
                    defaultValue="50021"
                    label="Zip Code"
                    onChange={(event) => setFirst(event.target.value)}
                    required
                  />
                </Grid>
              </StudentInfo>
            </Grid>

            <Grid align="center" marginTop={7}>
              <Button variant="contained" type="Submit">
                Save
              </Button>
              {'   '}
              <Button variant="contained" onClick={onCancelClick}>
                Cancel
              </Button>
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
    event.preventDefault();
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

  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
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
