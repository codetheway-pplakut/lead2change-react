import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Modal } from '@mui/material';

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
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            Remember to Save
          </Typography>
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
