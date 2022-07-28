import React from 'react';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import BasicTabs from './tabs';
import Navbar from '../admin/sampleNavbar';
import ExitModal from './exit-modal';

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

export default function InterviewPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid container>
          <Grid
            item
            align="center"
            style={{
              // backgroundColor: '#2656A5',
              marginBottom: '2vh',
              color: 'black',
              padding: '0.1vh',
            }}
            sx={{ width: '100%' }}
          >
            <h1>STUDENT NAME INTERVIEW</h1>
          </Grid>
        </Grid>
        <BasicTabs />
        <Stack
          spacing={75}
          direction="row"
          sx={{
            p: 2,
          }}
        >
          <ExitModal />
        </Stack>
      </ThemeProvider>
    </div>
  );
}
