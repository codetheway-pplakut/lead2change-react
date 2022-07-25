import * as React from 'react';

import { useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Modal, Grid } from '@mui/material';
import ROUTES from '../../constants/routes';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  align: 'center',
};

export default function ExitModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const backHome = () => {
    navigate(ROUTES.HOME);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Go back home
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid item xs={8}>
            <Typography
              id="modal-modal-title"
              variant="h5"
              component="h1"
              align="center"
            >
              Remember to Save
            </Typography>
          </Grid>
          <Typography
            component="span"
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            Are you sure you want to go back to home?
          </Typography>
          <Typography
            component="span"
            id="modal-modal-description"
            sx={{ mt: 2 }}
            align="center"
          >
            If so, hit the BackHome or Return to Interview
          </Typography>
          <Stack
            spacing={20}
            direction="row"
            sx={{
              p: 2,
            }}
          >
            <Button variant="outlined" onClick={backHome}>
              Back Home
            </Button>
            <Button variant="contained" onClick={handleClose}>
              Return to Interview
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
