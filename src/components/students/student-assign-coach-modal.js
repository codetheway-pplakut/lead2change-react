/* eslint-disable react/require-default-props */
import * as React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '@mui/icons-material/Close';

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
import { createTheme } from '@mui/material/styles';

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
      <Grid>
        {coachId !== null &&
          filteredArray.map((coach) => {
            return getCoachName(coach);
          })}
        {coachId === null && <p>Unassigned</p>}
        <IconButton onClick={handleOpen}>
          <EditIcon sx={{ color: '#004cbb' }} />
        </IconButton>
      </Grid>
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
              <Grid container alignItems="center">
                <Grid item xs={2} />
                <Grid item xs={8}>
                  <Typography
                    variant="h5"
                    component="h2"
                    align="center"
                    padding="10px"
                  >
                    Assign a Coach
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
          <Box paddingTop="10px" paddingBottom="10px" paddingLeft="20px">
            <FormControl>
              <RadioGroup value={value} onChange={handleCoachChange}>
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
          </Box>
          <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
            <Grid item xs={4}>
              <Button
                theme={buttonTheme}
                color="delete"
                variant="contained"
                onClick={confirm}
                disabled={denySubmit}
                style={{ minWidth: '120px' }}
              >
                <Typography paddingTop="5px" paddingBottom="5px">
                  Assign
                </Typography>
              </Button>
            </Grid>
            <Grid item xs={1} />

            <Grid item xs={4}>
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
    </div>
  );
}

CoachAssignModal.propTypes = {
  confirmHandler: PropTypes.func.isRequired,
  studentId: PropTypes.string.isRequired,
  coachId: PropTypes.string,
  coaches: PropTypes.array.isRequired,
};
