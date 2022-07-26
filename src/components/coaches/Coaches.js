import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CoachesList from './CoachesList';
import {
  getCoaches,
  addCoach,
  updateCoach,
} from '../../services/coaches/coaches';
import { unassignStudent } from '../../services/students/students';

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

  const refreshCoaches = async () => {
    const result = await getCoaches();
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
      {coachesExist && (
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Grid container>
              <Grid
                item
                align="center"
                style={{
                  color: '#FFFFFF',
                  backgroundColor: '#2656A5',
                  marginBottom: '3vh',
                  padding: '1.5vh',
                }}
                sx={{ width: '100%' }}
              >
                <h1>COACHES</h1>
              </Grid>
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
