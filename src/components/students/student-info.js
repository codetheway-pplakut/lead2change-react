import React from 'react';

import { Box, Button, Grid, Paper } from '@mui/material';
import { experimentalStyled as styled } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import TabsFunction from './student-details-tabs';

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

export default function MainInfoSidebar(props) {
  const onBackClick = () => {
    navigate(ROUTES.STUDENTS);
  };
  const navigate = useNavigate();
  const buttonText = '< Back to table';
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
          <Grid style={{ marginLeft: '2vh' }}>
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