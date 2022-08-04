import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router-dom';
import ColorButton from '../coaches/Shared/ColoredButton';

import { getStudentById } from '../../services/students/students';

const StudentInfo = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 0.1,
  m: 0.1,
  bgcolor: 'background.paper',
  borderRadius: 1,
}));

function getParsedDate(strDate) {
  if (strDate === null) {
    return '';
  }
  const strSplitDate = String(strDate).split(' ');
  let date = new Date(strSplitDate[0]);
  let dd = date.getDate();
  let mm = date.getMonth() + 1;

  const yyyy = date.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }
  if (mm < 10) {
    mm = `0${mm}`;
  }
  date = `${dd}-${mm}-${yyyy}`;
  return date.toString();
}

export default function StudentInfoDisplay(props) {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);
  const { onEditClick } = props;

  return (
    <Grid container>
      <Grid item xs={4}>
        <Paper
          sx={{
            '#1A2027': '#fff',
            textAlign: 'center',
            width: '50vh',
            mr: '8vh',
            height: '80vh',
            overflowY: 'auto',
          }}
          style={{ marginLeft: '3vh' }}
        >
          <Grid
            container
            spacing={0}
            align="center"
            justify="center"
            direction="column"
            style={{ backgroundColor: '#2656A5', color: '#FFFFFF' }}
          >
            <h2>Student Info</h2>
          </Grid>
          <Grid marginRight={1} marginTop={1}>
            <ColorButton
              style={{ float: 'right' }}
              variant="contained"
              onClick={onEditClick}
            >
              Edit
            </ColorButton>
          </Grid>
          <Grid style={{ margin: '2vh' }}>
            <StudentInfo>
              <h3 component="span">
                Date of Birth: {'  '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {getParsedDate(students.studentDateOfBirth)}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3 component="span">
                Email Address:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentEmail}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3 component="span">
                Phone Number:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentCellPhone}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                Home Address:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentAddress}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                Apt. #:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentApartmentNumber}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                State:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentState}
                </Box>
              </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>
                Zip Code:{' '}
                <Box component="span" style={{ fontWeight: 'normal' }}>
                  {students.studentZipCode}
                </Box>
              </h3>
            </StudentInfo>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}

StudentInfoDisplay.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};
