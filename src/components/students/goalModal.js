import React, { useState } from 'react';
import PropTypes from 'prop-types';

import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router';
import ROUTES from '../../constants/routes';

export default function GoalRegistryModal(props) {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60vh',
    bgcolor: 'background.paper',
    border: '',
    boxShadow: '12vh',
    p: '2vh',
  };

  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [goalSet, setGoalSet] = useState('');
  const [dateGoalSet, setDateGoalSet] = useState('');
  const [sel, setSel] = useState('');
  const [goalReviewDate, setGoalReviewDate] = useState('');
  const [wasItAccomplished, setWasItAccomplished] = useState('');
  const [explanation, setExplanation] = useState('');
  const Register = () => {
    handleClose();
    addFunction(
      goalSet,
      dateGoalSet,
      sel,
      goalReviewDate,
      wasItAccomplished,
      explanation
    );
  };

  return (
    <div>
      <p />
      <Button onClick={handleOpen}>Create a New Goal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Box>
              <Grid container>
                <Grid item xs={11}>
                  <Typography variant="h6" component="h3" align="left">
                    Create a New Goal
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  <IconButton color="primary" onClick={handleClose}>
                    <CloseIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Stack direction="row" spacing={2} sx={{ my: 2 }}>
                <TextField
                  label="Goal Set"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  onChange={(event) => setGoalSet(event.target.value)}
                  value={goalSet}
                />
                <TextField
                  label="Goal Set Date"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  type="date"
                  onChange={(event) => setDateGoalSet(event.target.value)}
                  value={dateGoalSet}
                />
              </Stack>
            </Box>
            <Box>
              <TextField
                label="SEL"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 2 }}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => setSel(event.target.value)}
                value={sel}
              />
            </Box>
            <Box>
              <TextField
                label="Goal Review Date"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 2 }}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => setGoalReviewDate(event.target.value)}
                type="date"
                value={goalReviewDate}
              />
            </Box>
            <Box>
              <TextField
                label="Was it Accomplished?"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 2 }}
                InputLabelProps={{ shrink: true }}
                onChange={(event) => setWasItAccomplished(event.target.value)}
                value={wasItAccomplished}
              />
            </Box>
            <TextField
              label="Explanation"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{ shrink: true }}
              sx={{ mb: 2 }}
              onChange={(event) => setExplanation(event.target.value)}
              value={explanation}
            />
            <Button
              fullWidth
              type="submit"
              onClick={Register}
              variant="contained"
            >
              {console.log('test')}
              Sign Up
            </Button>
          </Box>
        </Modal>
      </Modal>
    </div>
  );
}

GoalRegistryModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
