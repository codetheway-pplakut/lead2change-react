import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import TabsFunction from './detailsTabs';
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
  const onBackClick = () => {
    navigate(ROUTES.STUDENT_TEST);
  };
  const navigate = useNavigate();
  const buttonText = '< Back to table';
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography
          style={{ color: '#2656A5' }}
          variant="h4"
          align="center"
          sx={{ m: '2vh' }}
        >
          Students
        </Typography>
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
                <b>First Name: Aaditya </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Last Name: Tiwari </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Date of Birth: 02/04/2006</b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Age: 16 </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Email Address: 1234@gmail.com </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Phone Number: 901-234-5678 </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Home Address: 123456 HelloStreet Blvd. </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Apt. #: N/A </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>Zip Code: 12345 </b>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                <b>State: Wisconsin </b>
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
