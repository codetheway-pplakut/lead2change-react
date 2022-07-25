import * as React from 'react';
import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import StudentTable from './studentTable';
import StudentModal from './studentModal';

export default function Student(props) {
  return (
    <Box>
      <Typography align="center" variant="h3" component="h4">
        STUDENTS
      </Typography>
      <Stack
        spacing={2}
        justifyContent="center"
        justify="center"
        sx={{ mx: '20vh' }}
      >
        <StudentTable />
      </Stack>
    </Box>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
};
