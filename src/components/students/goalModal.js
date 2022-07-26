import * as React from 'react';
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
import { useNavigate } from 'react-router';
import ROUTES from '../../constants/routes';

export default function GoalRegistryModal(props) {
  const {
    confirmHandler,
    goalSet,
    dateGoalSet,
    sel,
    goalReviewDate,
    wasItAccomplished,
    explanation,
    onGoalSetChange,
    onDateGoalSetChange,
    onSelChange,
    onGoalReviewDateChange,
    onWasItAccomplishedChange,
    onExplanationChange,
  } = props;

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const confirm = () => {
    confirmHandler(
      goalSet,
      dateGoalSet,
      sel,
      goalReviewDate,
      wasItAccomplished,
      explanation
    );
    handleClose();
  };

  return (
    <div>
      <p />
      <Button onClick={handleOpen}>Create a New Goal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        variant="contained"
        startIcon={<AddIcon />}
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
                  onChange={(event) => onGoalSetChange(event.target.value)}
                  value={goalSet}
                />
                <TextField
                  label="Goal Set Date"
                  variant="outlined"
                  fullWidth
                  required
                  sx={{ mb: 2 }}
                  InputLabelProps={{ shrink: true }}
                  onChange={(event) => onDateGoalSetChange(event.target.value)}
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
                onChange={(event) => onSelChange(event.target.value)}
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
                onChange={(event) => onGoalReviewDateChange(event.target.value)}
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
                onChange={(event) =>
                  onWasItAccomplishedChange(event.target.value)
                }
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
              onChange={(event) => onExplanationChange(event.target.value)}
              value={explanation}
            />
            <Button variant="contained" onClick={confirm} fullWidth>
              Create Goal
            </Button>
          </Box>
        </Modal>
      </Modal>
    </div>
  );
}

GoalRegistryModal.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  goalSet: PropTypes.string.isRequired,
  dateGoalSet: PropTypes.string.isRequired,
  sel: PropTypes.string.isRequired,
  goalReviewDate: PropTypes.string.isRequired,
  wasItAccomplished: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  onGoalSetChange: PropTypes.func.isRequired,
  onDateGoalSetChange: PropTypes.func.isRequired,
  onSelChange: PropTypes.func.isRequired,
  onGoalReviewDateChange: PropTypes.func.isRequired,
  onWasItAccomplishedChange: PropTypes.func.isRequired,
  onExplanationChange: PropTypes.func.isRequired,
};
