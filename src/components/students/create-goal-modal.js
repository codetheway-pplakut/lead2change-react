import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import PropTypes from 'prop-types';
import { Box, Checkbox } from '@mui/material';
import { useParams } from 'react-router';
import ColorButton from '../coaches/Shared/ColoredButton';
import { addGoal } from '../../services/goals/goals';

export default function CreateGoalModal(props) {
  const { studentId } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [goalSet, setGoalSet] = useState('');
  const [dateGoalSet, setDateGoalSet] = useState('');
  const [sel1, setsel1] = useState(false);
  const [sel2, setsel2] = useState(false);
  const [sel3, setsel3] = useState(false);
  const [sel4, setsel4] = useState(false);
  const [sel5, setsel5] = useState(false);
  const [sel, setsel] = useState('');
  const [dateGoalReview, setDateGoalReview] = useState('');
  const [wasItAccomplished, setWasItAccomplished] = useState('');
  const [explanation, setExplanation] = useState('');

  const Create = async () => {
    handleClose();
    handleSel();
    {
      const Goal = {
        studentId,
        goalSet,
        sel,
        dateGoalSet,
        dateGoalReview,
        wasItAccomplished,
        explanation,
      };
      console.log(studentId);
      console.log(Goal);
      await addGoal(Goal);
      console.log('Add method has been completed');
    }
  };

  const handleSel = () => {
    let temp = `${sel}`;
    if (sel1) {
      temp += 'Self-Awareness/';
    }
    if (sel2) {
      temp += 'Self-Management/';
    }
    if (sel3) {
      temp += 'Social Awareness/';
    }
    if (sel4) {
      temp += 'Relationship Skills/';
    }
    if (sel5) {
      temp += 'Responsible Decision-making/';
    }

    setsel(temp);
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
                <Grid item xs={2}>
                  <Box
                    value={sel1}
                    label="Self-Awareness"
                    onChange={(e) => {
                      setsel1(e.target.checked);
                      handleSel();
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox name="checkedA" value="Self-Awareness/" />
                      }
                      label="Self-Awareness"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    value={sel2}
                    label="Self-Management"
                    onChange={(e) => {
                      setsel2(e.target.checked);
                      handleSel();
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox name="checkedB" value="Self-Management/" />
                      }
                      label="Self-Management"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    value={sel3}
                    label="Social Awareness"
                    onChange={(e) => {
                      setsel3(e.target.checked);
                      handleSel();
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox name="checkedC" value="Social Awareness/" />
                      }
                      label="Social Awareness"
                    />
                  </Box>
                </Grid>
                <Grid item xs={2}>
                  <Box
                    value={sel4}
                    label="Relationship Skills"
                    onChange={(e) => {
                      setsel4(e.target.checked);
                      handleSel();
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="checkedD"
                          value="Relationship Skills/"
                        />
                      }
                      label="Relationship Skills"
                    />
                  </Box>
                  <Grid item xs={2}>
                    <Box
                      value={sel5}
                      label="Responsible Decision-making"
                      onChange={(e) => {
                        setsel5(e.target.checked);
                        handleSel();
                      }}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="checkedE"
                            value="Responsible Decision-making/"
                          />
                        }
                        label="Responsible Decision-making"
                      />
                    </Box>
                  </Grid>
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
                    onClick={Create}
                    value={
                      (goalSet,
                      sel,
                      dateGoalSet,
                      dateGoalReview,
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

CreateGoalModal.propTypes = {
  studentId: PropTypes.string.isRequired,
};
