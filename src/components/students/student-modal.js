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

import { createTheme } from '@mui/material/styles';

export default function StudentModal(props) {
  const { modalType, confirmHandler, studentId, modalMessage } = props;

  const StyledButton = styled(Button)({
    backgroundColor: '#004cbb',
    '&:hover': {
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
    width: 430,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirm = () => {
    confirmHandler(studentId);
    handleClose();
  };

  const buttonTheme = createTheme({
    palette: {
      delete: {
        main: '#004cbb',
        contrastText: '#fff',
      },
      cancel: {
        main: '#004cbb',
        contrastText: '#fff',
      },
    },
  });

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
        <Box sx={style}>
          <Grid container>
            <Grid
              item
              sx={{
                bgcolor: '#004cbb',
                color: 'white',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              xs={12}
            >
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    padding="10px"
                  >
                    {modalType} Student
                  </Typography>
                  <IconButton
                    onClick={handleClose}
                    sx={{ position: 'absolute', right: 8, top: 8 }}
                  >
                    <CloseIcon fontSize="large" sx={{ color: 'white' }} />
                  </IconButton>
                </Grid>
                <Grid item xs={1} />
              </Grid>
            </Grid>
          </Grid>
          <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
            <Box padding="30px">
              <Grid item xs={12} align="center">
                {modalMessage}
              </Grid>
            </Box>
            <Grid item xs={4} align="center" component="span">
              <Button
                theme={buttonTheme}
                color="delete"
                variant="contained"
                onClick={confirm}
                style={{ minWidth: '120px' }}
              >
                <Typography paddingTop="5px" paddingBottom="5px">
                  {modalType}
                </Typography>
              </Button>
            </Grid>
            <Grid xs={1} />
            <Grid item xs={4} align="center" component="span">
              <Button
                theme={buttonTheme}
                color="cancel"
                variant="contained"
                onClick={handleClose}
                style={{ minWidth: '120px' }}
              >
                <Typography padding="5px">Cancel</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}

StudentModal.propTypes = {
  modalType: PropTypes.string.isRequired,
  modalMessage: PropTypes.string.isRequired,
  confirmHandler: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
};
