import * as React from 'react';

import { useNavigate } from 'react-router';

import Typography from '@mui/material/Typography';

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
      >
        <Grid container variant="large">
          <Grid container>
            <Grid item sx={{ bgcolor: '#004cbb', color: 'white' }} xs={12}>
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" component="h2" align="center">
                    Remember To Save
                  </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item>
                  <IconButton
                    align="right"
                    size="medium"
                    onClick={handleClose}
                    sx={{ color: 'white' }}
                  >
                    <CloseOutlinedIcon />
                  </IconButton>
                </Grid>
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
                  Hit the back home button to go back home. Hit the return to
                  interview button so you can save changes.
                </Typography>
                <Grid item xs={2}>
                  <ColorButton variant="contained" fullWidth onClick={backHome}>
                    Go Back Home
                  </ColorButton>
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={handleClose}
                  >
                    Return To Interview
                  </ColorButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
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
