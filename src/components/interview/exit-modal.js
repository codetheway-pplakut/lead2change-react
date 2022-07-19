import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function returnInterview() {
  return null;
}

function BackHome() {
  return null;
}

export default function ExitModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {handleOpen}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to go back to home? If so, hit the BackHome or
            Return to Interview
          </Typography>
          <Stack
            spacing={15}
            direction="row"
            sx={{
              p: 2,
            }}
          >
            <Button variant="outlined" onClick={BackHome}>
              Back Home
            </Button>
            <Button variant="contained" onClick={returnInterview}>
              Return to Interview
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
