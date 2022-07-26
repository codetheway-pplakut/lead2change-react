import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import StudentTable from './student-table';

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
