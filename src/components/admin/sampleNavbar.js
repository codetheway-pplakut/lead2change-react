/* eslint-disable prettier/prettier */
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
 
export default function Navbar() {
 
    const onStudentClick = () => {
        // TODO document why this arrow function is empty
    };

    const onCoachesClick = () => {
      // TODO document why this arrow function is empty
    };

    const onInterviewsClick = () => {
      // TODO document why this arrow function is empty
    };

    const onQuestionsClick = () => {
      // TODO document why this arrow function is empty
    };

    const onAdminsClick = () => {
      // TODO document why this arrow function is empty
    };
 
 
    // still need to make the text redirect to the correct page, grab login info from database to put correct name in right corner
  return (
    <Box>
      <AppBar position="static" sx={{backgroundColor: '#212529'}}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center" justify="center">
            <Grid item xl={3} lg={3} md={3}>
                    <img src="https://dev-lead2change-ctw.azurewebsites.net/Images/Lead2ChangeLogo.png" width="100%" height="100%" alt="Lead2Change"/>
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={8} xs={8} >
              <Grid container spacing={2} alignItems="center" justify="center">
                <Grid item xl={2}>
                    <Button variant="text" onClick={onStudentClick} justify="center"><Typography color="white">Students</Typography></Button>
                </Grid>
                <Grid item xl={2}>
                    <Button variant="text" onClick={onCoachesClick} justify="center" ><Typography color="white">Coaches</Typography></Button>
                </Grid>
                <Grid item xl={2}>
                    <Button variant="text" onClick={onInterviewsClick} justify="center" ><Typography color="white">Interviews</Typography></Button>
                </Grid>
                <Grid item xl={2}>
                    <Button variant="text" onClick={onQuestionsClick} justify="center" ><Typography color="white">Questions</Typography></Button>
                </Grid>
                <Grid item xl={2}>
                    <Button variant="text" onClick={onAdminsClick} justify="center" ><Typography color="white">Admins</Typography></Button>
                </Grid>
                <Grid item xl={2}>
                    <Typography color="white">
                        <p>Hello *insert name here*</p>
                    </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
