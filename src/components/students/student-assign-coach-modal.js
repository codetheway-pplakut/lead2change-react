/* eslint-disable react/require-default-props */
import * as React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  styled,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { getCoaches } from '../../services/coaches/coaches';

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
const StyledRadio = styled(Radio)({
  '&.Mui-checked': {
    color: '#005ade',
  },
});

export default function CoachAssignModal(props) {
  const { confirmHandler, studentId, coachId, coaches } = props;
  const [value, setValue] = React.useState(coachId);
  const [newCoachId, setNewCoachId] = React.useState('');

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
    if (newCoachId !== '') {
      confirmHandler(studentId, newCoachId);
    }
    handleClose();
  };

  const getCoachName = (coach) => {
    let coachName = coach.coachFirstName;
    coachName += ' ';
    coachName += coach.coachLastName;
    return coachName;
  };

  const handleCoachChange = (event) => {
    setValue(event.target.value);
    setNewCoachId(event.target.value);
  };

  const filteredArray = coaches.filter((coach) => {
    return coach.id === coachId;
  });

  let denySubmit = true;
  if (newCoachId !== '') {
    denySubmit = false;
  }

  return (
    <div>
      <Grid>
        {coachId !== null &&
          filteredArray.map((coach) => {
            return getCoachName(coach);
          })}
        {coachId === null && <p>Unassigned</p>}
        <IconButton onClick={handleOpen}>
          <EditIcon />
        </IconButton>
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Grid item xs={12}>
            <Typography variant="h6" align="center" component="span">
              Assign A Coach
            </Typography>
          </Grid>
          <FormControl>
            <RadioGroup value={value} onChange={handleCoachChange}>
              <FormControlLabel
                value="Unassigned"
                control={<StyledRadio />}
                label="Unassigned"
              />
              {coaches
                .filter((item) => item.active === true)
                .map((coach) => (
                  <FormControlLabel
                    value={coach.id}
                    control={<StyledRadio />}
                    label={getCoachName(coach)}
                    key={coach.id}
                  />
                ))}
            </RadioGroup>
          </FormControl>
          <Grid container spacing={4} sx={{ mt: '1vh' }}>
            <Grid item xs={6} align="center">
              <StyledButton
                variant="contained"
                onClick={confirm}
                fullWidth
                disabled={denySubmit}
              >
                Assign
              </StyledButton>
            </Grid>
            <Grid item xs={6} align="center">
              <CancelButton variant="contained" onClick={handleClose} fullWidth>
                Cancel
              </CancelButton>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

CoachAssignModal.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  coachId: PropTypes.string,
  coaches: PropTypes.array.isRequired,
};
