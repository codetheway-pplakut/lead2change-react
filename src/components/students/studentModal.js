import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

export default function StudentModal(props) {
  const { modalType, confirmHandler, studentId } = props;

  let useColor = 'warning';
  if (modalType === 'decline') {
    useColor = 'error';
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirm = () => {
    confirmHandler(studentId);
    handleClose();
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color={useColor}>
        {modalType}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" align="center">
            Are you sure you want to {modalType} this student?
          </Typography>
          <Grid container spacing={4} sx={{ mt: '1vh' }}>
            <Grid item xs={6} align="center">
              <Button
                variant="contained"
                color={useColor}
                onClick={confirm}
                fullWidth
              >
                {modalType}
              </Button>
            </Grid>
            <Grid item xs={6} align="center">
              <Button variant="contained" onClick={handleClose} fullWidth>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};
