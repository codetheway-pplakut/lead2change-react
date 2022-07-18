import * as React from 'react';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import { useNavigate } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import StudentTable from './studentTable';
import StudentModal from './studentModal';

export default function Student(props) {
  const text = '< Back to Home';

  const onBackClick = () => {
    navigate(ROUTES.HOME);
  };
  const navigate = useNavigate();

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
        <Grid item xs={1}>
          <Button onClick={onBackClick} size="small" variant="outlined">
            {text}
          </Button>
        </Grid>
      </Stack>
    </div>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
};
