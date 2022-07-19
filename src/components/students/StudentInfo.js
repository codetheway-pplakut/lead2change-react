/* eslint-disable no-useless-return */
/* eslint-disable no-restricted-globals */
/* eslint-disable react/button-has-type */
import React, { useState, useRef } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
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

export default function ResponsiveGrid(props) {
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
        <h1>AADI&rsquo;S DETAILS</h1>
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
                  First Name:{' '}
                  <input
                    onChange={handleChange}
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                    type="text"
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
                  Last Name:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                  />{' '}
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Date of Birth:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                    type="date"
                  />
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Age:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                    type="number"
                  />{' '}
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Email Address:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                  />
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Phone Number:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                  />{' '}
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Home Address:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                  />{' '}
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Apt. #:
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                  />
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  Zip Code:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
                  />
                </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>
                  State:{' '}
                  <input
                    className="typing-container"
                    placeholder=" I want to get job "
                    disabled={!disabled}
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
