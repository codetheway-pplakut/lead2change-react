import * as React from 'react';

import { useNavigate } from 'react-router';

import Typography from '@mui/material/Typography';

import { createTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Modal, Grid, IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ColorButton from '../coaches/Shared/ColoredButton';
import ROUTES from '../../constants/routes';

export default function ExitModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const backHome = () => {
    navigate(ROUTES.STUDENTS);
  };

  const modalPosition = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 550,
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
  };
  const buttonTheme = createTheme({
    palette: {
      save: {
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
      <Button variant="outlined" onClick={handleOpen}>
        Go back home
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Box sx={modalPosition}>
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
                    Remember to Save
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

          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
                <Typography
                  component="span"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  align="center"
                >
                  Remember to save all changes before exiting the page.
                </Typography>
                <Typography
                  component="span"
                  id="modal-modal-description"
                  sx={{ mt: 2 }}
                  align="center"
                >
                  Hit the Go Back Home button to return to Students. Hit the
                  Return to Interview button if you need to save changes.
                </Typography>

                <Grid
                  container
                  spacing={0}
                  justifyContent="center"
                  padding="20px"
                  align="center"
                >
                  <Grid item xs={5}>
                    <Box>
                      <Button
                        theme={buttonTheme}
                        color="save"
                        variant="contained"
                        onClick={backHome}
                        style={{ minWidth: '150px' }}
                      >
                        <Typography padding="5px">Go Back Home</Typography>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid xs={1} />
                  <Grid item xs={6}>
                    <Box>
                      <Button
                        theme={buttonTheme}
                        color="cancel"
                        variant="contained"
                        onClick={handleClose}
                        style={{ minWidth: '150px' }}
                      >
                        <Typography padding="5px">
                          Return to Interview
                        </Typography>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      {/* <Modal
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
      </Modal> */}
    </div>
  );
}
