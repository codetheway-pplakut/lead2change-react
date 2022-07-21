import * as React from 'react';
import PropTypes from 'prop-types';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import StudentTable from './studentTable';
import StudentModal from './studentModal';

export default function Student(props) {
  return (
    <div>
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
      </Stack>
    </div>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
};
