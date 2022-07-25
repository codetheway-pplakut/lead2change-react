import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import ColorButton from '../coaches/Shared/ColoredButton';

export default function CreateGoalModal(props) {
  const { addFunction } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [goalSet, setGoalSet] = useState('');
  const [dateGoalSet, setDateGoalSet] = useState('');
  /* TODO add sel */
  const [dateGoalReview, setDateGoalReview] = useState('');
  const [wasItAccomplished, setWasItAccomplished] = useState('');
  const [explanation, setExplanation] = useState('');
  const Complete = () => {
    handleClose();
    addFunction(
      goalSet,
      dateGoalSet,
      dateGoalReview,
      wasItAccomplished,
      explanation
    );
  };
  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen}>
        + New Goal
      </ColorButton>
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
                    New Goal
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
                <Grid item xs={6}>
                  <TextField
                    value={goalSet}
                    fullWidth
                    label="Your Goal"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setGoalSet(e.target.value);
                    }}
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    value={dateGoalSet}
                    fullWidth
                    label="Date Goal Set:"
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setDateGoalSet(e.target.value);
                    }}
                  />
                </Grid>
                {/* TODO add SEL */}
                <Grid item xs={14}>
                  <TextField
                    value={dateGoalReview}
                    fullWidth
                    label="Goal Review Date:"
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setDateGoalReview(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={wasItAccomplished}
                    fullWidth
                    label="Was the goal accomplished?"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setWasItAccomplished(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    value={explanation}
                    fullWidth
                    label="Explanation"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setExplanation(e.target.value);
                    }}
                  />
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={Complete}
                    value={
                      (goalSet,
                      dateGoalSet,
                      dateGoalReview,
                      wasItAccomplished,
                      explanation)
                    }
                    /* TODO add scl */
                  >
                    Complete
                  </ColorButton>
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    onClick={handleClose}
                  >
                    Cancel
                  </ColorButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Modal>
    </div>
  );
}

CreateGoalModal.propTypes = {
  addFunction: PropTypes.func.isRequired,
};
