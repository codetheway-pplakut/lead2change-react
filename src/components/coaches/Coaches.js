import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CoachesList from './CoachesList';
import RegisterCoachModal from './Modals/RegisterCoachModal';
import { getCoaches } from '../../services/coaches/coaches';

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
  const refreshCoaches = async () => {
    const coachAnswer = await getCoaches();
    setCoaches(coachAnswer);
    console.log(coachAnswer);
  };
  const coachesExist = Boolean(coaches.length);
  useEffect(() => {
    refreshCoaches();
  }, []);
  const newCoach = (first, last, email, phone) => {
    const coach = {
      id: Date.now(), // TODO : Update to agreed ID creation method
      coachFirstName: first,
      coachLastName: last,
      coachEmail: email,
      coachPhoneNumber: phone,
      students: [],
    };
    setCoaches([...coaches, coach]);
  };

  const deleteCoach = (id) => {
    setCoaches(coaches.filter((item) => item.id !== id));
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
                    <CoachesList rows={coaches} deleteFunction={deleteCoach} />
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
