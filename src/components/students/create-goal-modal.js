import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import ColorButton from '../coaches/Shared/ColoredButton';
import { addGoal } from '../../services/goals/goals';

export default function CreateGoalModal(props) {
  const { studentId } = useParams();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [goalSet, setGoalSet] = useState('');
  const [dateGoalSet, setDateGoalSet] = useState('');
  const [sel, setsel] = useState('');
  const [goalReviewDate, setGoalReviewDate] = useState('');
  const [wasItAccomplished, setWasItAccomplished] = useState('');
  const [explanation, setExplanation] = useState('');

  const Create = async () => {
    handleClose();
    {
      const Goal = {
        studentId,
        goalSet,
        sel,
        dateGoalSet,
        goalReviewDate,
        wasItAccomplished,
        explanation,
      };
      await addGoal(Goal);
      window.location.reload(false);
    }
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '750px',
    width: '50%',
    backgroundColor: 'white',
    boxShadow: 12,
  };
  return (
    <div>
      <ColorButton
        variant="contained"
        onClick={handleOpen}
        studentId={studentId}
      >
        + New Goal
      </ColorButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
      >
        <Grid container sx={style}>
          <Grid container>
            <Grid item sx={{ bgcolor: '#004cbb', color: 'white' }} xs={12}>
              <Grid container alignItems="center" sx={{ margin: 1 }}>
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography variant="h5" component="span" align="center">
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <TextField
                    value={sel}
                    fullWidth
                    label="SEL"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setsel(e.target.value);
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
                <Grid item xs={6}>
                  <TextField
                    value={goalReviewDate}
                    fullWidth
                    label="Goal Review Date:"
                    type="date"
                    variant="outlined"
                    size="small"
                    onChange={(e) => {
                      setGoalReviewDate(e.target.value);
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
                    onClick={Create}
                    value={
                      (goalSet,
                      dateGoalSet,
                      sel,
                      goalReviewDate,
                      wasItAccomplished,
                      explanation)
                    }
                  >
                    Create
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
