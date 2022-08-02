import * as React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import StudentTable from './studentTable';

export default function Student(props) {
  return (
    <Box>
      <Typography align="center" variant="h3" component="h4">
        STUDENTS
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={10}>
          <Grid container justifyContent="right" spacing={1}>
            <Grid item xs={12}>
              <StudentTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
