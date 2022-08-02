import React from 'react';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export default function DisabledDeleteAdminButton() {
  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: 'orange',
        contrastText: '#fff',
      },
    },
  });

  return (
    <div>
      <Button theme={buttonTheme} color="delete" variant="disabled">
        <Typography textAlign="center" color="#56585c">
          Delete{' '}
        </Typography>
      </Button>
    </div>
  );
}
