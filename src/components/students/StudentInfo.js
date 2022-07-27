import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';

import { useNavigate, useParams } from 'react-router-dom';
import ROUTES from '../../constants/routes';

import TabsFunction from './detailsTab';
import {
  getStudents,
  getStudentById,
  updateStudent,
} from '../../services/students/students';

const StudentInfo = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,

  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  p: 0.1,
  m: 0.1,
  bgcolor: 'background.paper',
  borderRadius: 1,
}));

export default function ResponsiveGrid(props) {
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);

  const navigate = useNavigate();
  const buttonText = '< Back to table';
  return (
    <Grid container>
      <Grid
        item
        align="center"
        style={{
          backgroundColor: '#2656A5',
          marginBottom: '3vh',
          color: '#FFFFFF',
          padding: '0.1vh',
        }}
        sx={{ width: '100%' }}
      >
        <h1>
          {students.studentFirstName} {students.studentLastName}&rsquo;s Details
        </h1>
      </Grid>
      <Grid item xs={4}>
        <Paper
          sx={{
            backgroundColor: 'dark',
            '#1A2027': '#fff',
            textAlign: 'center',
            color: 'secondary',
            width: '50vh',
            mr: '10vh',
            height: '70vh',
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
          <Grid style={{ marginLeft: '2vh' }}>
            <StudentInfo>
              <h3>Date of Birth: {students.studentDateOfBirth} </h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Email Address: {students.studentEmail}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Phone Number: {students.studentCellPhone}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Home Address: {students.studentAddress}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Apt. #: {students.studentApartmentNumber}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>State: {students.studentState}</h3>
            </StudentInfo>
            <StudentInfo>
              <h3>Zip Code: {students.studentZipCode}</h3>
            </StudentInfo>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={8}>
        <TabsFunction />
      </Grid>
    </Grid>
  );
}
