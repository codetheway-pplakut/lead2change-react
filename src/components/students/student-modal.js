import * as React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  styled,
  Typography,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export default function StudentModal(props) {
  const { modalType, confirmHandler, studentId } = props;

  const StyledButton = styled(Button)({
    backgroundColor: '#004cbb',
    '&hover': {
      backgroundColor: '#005ade',
    },
  });
  const CancelButton = styled(Button)({
    backgroundColor: '#7e8794',
    '&:hover': {
      backgroundColor: '#8698b3',
    },
  });

  let useColor = '';
  if (modalType === 'decline') {
    useColor = 'error';
  } else if (modalType === 'accept') {
    useColor = 'success';
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
    <Box>
      {modalType !== 'accept' && modalType !== 'decline' && (
        <StyledButton onClick={handleOpen} variant="contained">
          {modalType}
        </StyledButton>
      )}
      {modalType === 'accept' && (
        <IconButton color={useColor} onClick={handleOpen}>
          <CheckIcon />
        </IconButton>
      )}
      {modalType === 'decline' && (
        <IconButton color={useColor} onClick={handleOpen}>
          <CloseIcon />
        </IconButton>
      )}
      <Modal open={open} onClose={handleClose}>
        <Box sx={style} component="span">
          <Typography variant="h6" align="center" component="span">
            Are you sure you want to {modalType} this student?
          </Typography>
          <Grid container spacing={4} sx={{ mt: '1vh' }} component="span">
            <Grid item xs={6} align="center" component="span">
              <StyledButton
                component="span"
                variant="contained"
                onClick={confirm}
                fullWidth
              >
                {modalType}
              </StyledButton>
            </Grid>
            <Grid item xs={6} align="center" component="span">
              <CancelButton
                variant="contained"
                onClick={handleClose}
                component="span"
                fullWidth
              >
                Cancel
              </CancelButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};
