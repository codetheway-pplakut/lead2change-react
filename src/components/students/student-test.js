import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
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
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
};
