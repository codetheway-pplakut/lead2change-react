import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import uuid from 'react-uuid';
import CoachesList from './CoachesList';
import RegisterCoachModal from './Modals/RegisterCoachModal';
import {
  getCoaches,
  addCoach,
  updateCoach,
  deleteCoach,
} from '../../services/coaches/coaches';

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

  const newCoach = async (first, last, email, phone) => {
    const coach = {
      id: uuid(), // TODO : Update to agreed ID creation method
      coachFirstName: first,
      coachLastName: last,
      coachEmail: email,
      coachPhoneNumber: phone,
      students: [],
      active: true,
    };
    await addCoach(coach);
    await refreshCoaches();
  };
  const updateCoachInfo = async (coach) => {
    await updateCoach(coach);
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
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={8}>
                <Grid container justifyContent="right" spacing={1}>
                  <Grid item>
                    <RegisterCoachModal addFunction={newCoach} />
                  </Grid>
                  <Grid item xs={12}>
                    <CoachesList
                      rows={coaches}
                      deleteFunction={deleteCoachById}
                      updateFunction={updateCoachInfo}
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
