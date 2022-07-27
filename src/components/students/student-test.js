import * as React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import StudentTable from './studentTable';
import StudentModal from './studentModal';

import AddCareerModal from '../career/add-career-modal';

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

export default function Student(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Grid
            item
            align="center"
            style={{
              backgroundColor: '#2656A5',
              marginBottom: '2vh',
              color: '#FFFFFF',
              padding: '0.1vh',
            }}
            sx={{ width: '100%' }}
          >
            <h1>STUDENTS</h1>
          </Grid>
        </Grid>
        <Stack
          spacing={2}
          justifyContent="center"
          justify="center"
          sx={{ mx: '20vh' }}
        >
          <StudentTable />
          <AddCareerModal />
        </Stack>
      </ThemeProvider>
    </div>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
};
