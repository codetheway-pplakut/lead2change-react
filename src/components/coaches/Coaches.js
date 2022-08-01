import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CoachesList from './CoachesList';
import {
  getCoaches,
  addCoach,
  updateCoach,
} from '../../services/coaches/coaches';
import { unassignStudent } from '../../services/students/students';
import ProgressIndicatorOverlay from '../progress-indicator-overlay/progress-indicator-overlay';

const theme = createTheme({
  components: {
    MuiGrid: {
      variants: [
        {
          props: { variant: 'large' },
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '750px',
            width: '50%',
            backgroundColor: 'white',
            boxShadow: 12,
          },
        },
        {
          props: { variant: 'small' },
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '150px',
            width: '25%',
            backgroundColor: 'white',
            boxShadow: 12,
          },
        },
        {
          props: { variant: 'ModalText' },
          style: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '150px',
            width: '25%',
            backgroundColor: 'white',
            boxShadow: 12,
          },
        },
      ],
    },
  },
});

export default function Coaches() {
  const [coaches, setCoaches] = useState([]);
  const coachesExist = Boolean(coaches.length);
  const [isLoading, setIsLoading] = React.useState(false);

  const refreshCoaches = async () => {
    setIsLoading(true);
    const result = await getCoaches();
    setIsLoading(false);
    setCoaches(result);
  };

  useEffect(() => {
    refreshCoaches();
  }, []);

  const newCoach = async (first, last, emailAddress, phoneNumber) => {
    const coach = {
      firstName: first,
      lastName: last,
      email: emailAddress,
      phone: phoneNumber,
    };
    await addCoach(coach);
    await refreshCoaches();
  };
  const unassignStudents = async (coach) => {
    coach.students.forEach((element) => {
      unassignStudent({ coachId: coach.id, studentId: element.id });
    });
    await refreshCoaches();
  };
  const updateCoachInfo = async (coach, change) => {
    await updateCoach(coach);
    if (change === false) {
      // Remove Students
    }
    await refreshCoaches();
  };
  const deleteCoachById = async (id) => {
    // await deleteCoach(id);
    // await refreshCoaches();
  };

  return (
    <div>
      <ProgressIndicatorOverlay active={isLoading} />
      {coachesExist && (
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Grid container justifyContent="center">
              <Typography align="center" variant="h3" component="h4">
                COACHES
              </Typography>
            </Grid>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={10}>
                <Grid container justifyContent="right" spacing={1}>
                  <Grid item xs={12}>
                    <CoachesList
                      rows={coaches}
                      addFunction={newCoach}
                      deleteFunction={deleteCoachById}
                      updateFunction={updateCoachInfo}
                      unassignFunction={unassignStudents}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CssBaseline>
        </ThemeProvider>
      )}
    </div>
  );
}
