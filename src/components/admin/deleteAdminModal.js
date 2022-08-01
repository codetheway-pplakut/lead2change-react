import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme } from '@mui/material/styles';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deleteAdmin, getAdmins } from '../../services/Admin/admin';

export default function DeleteAdminModal(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { id } = props;

  const refreshPage = async () => {
    window.location.reload(true);
  };

  const refreshAdmins = async () => {
    await getAdmins();
    refreshPage();
  };

  const deleteAdministrator = () => {
    handleClose();
    deleteAdmin(id);
    refreshAdmins();
  };

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

  const modalTextStyle = {
    fontSize: 20,
    color: 'grey',
    p: 2,
    fontFamily: 'calibri',
    textAlign: 'center',
  };

  const modalWarningStyle = {
    fontSize: 20,
    color: '#FF4D4D',
    textAlign: 'center',
    fontFamily: 'calibri',
    p: 1,
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
    <div>
      <IconButton>
        <DeleteOutlineIcon
          color="delete"
          theme={buttonTheme}
          onClick={handleOpen}
        />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid container>
            <Grid item xs={12} sx={{ borderRadius: '10px' }}>
              <Box
                bgcolor="#004cbb"
                sx={{
                  borderTopLeftRadius: '10px',
                  borderTopRightRadius: '10px',
                }}
              >
                <Typography
                  textAlign="center"
                  color="white"
                  variant="h4"
                  fontWeight="bold"
                  padding="10px"
                >
                  Delete Admin
                </Typography>
                <IconButton
                  onClick={handleClose}
                  sx={{ position: 'absolute', right: 8, top: 8 }}
                >
                  <CloseIcon fontSize="large" sx={{ color: 'white' }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>

          <Typography sx={modalTextStyle}>
            Are you sure you want to delete this administrative account?
          </Typography>
          <Typography sx={modalWarningStyle}>All data will be lost.</Typography>

          <Grid
            container
            spacing={2}
            justifyContent="center"
            padding="20px"
            align="center"
          >
            <Grid item xs={4}>
              <Box>
                <Button
                  theme={buttonTheme}
                  color="delete"
                  variant="contained"
                  onClick={deleteAdministrator}
                >
                  <Typography padding="5px">Delete</Typography>
                </Button>
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box>
                <Button
                  theme={buttonTheme}
                  color="cancel"
                  variant="contained"
                  onClick={handleClose}
                >
                  <Typography padding="5px">Cancel</Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
DeleteAdminModal.propTypes = {
  id: PropTypes.string.isRequired,
};
