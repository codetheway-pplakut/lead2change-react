import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import { Stack } from '@mui/material';
import TabsFunction from './detailsTab';
import StudentInfoEdit from './studentInfoEdit';
import StudentInfoDisplay from './studentInfoDisplay';
import { getCareersById } from '../../services/careers/careers';
import {
  getStudentById,
  updateStudent,
} from '../../services/students/students';
import { getGoalsByStudentId } from '../../services/goals/goals';

export default function ResponsiveGrid(props) {
  const { studentId } = useParams();

  const [goals, setGoals] = useState([]);
  const [career, setCareer] = useState([]);
  const [students, setStudents] = useState({});

  const updateStudentInfo = async (student) => {
    await updateStudent(student);
  };

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    const currentGoal = async () => {
      const currGoal = await getGoalsByStudentId(studentId);
      setGoals(currGoal);
    };
    const currentCareer = async () => {
      const currCareer = await getCareersById(studentId);
      setCareer(currCareer);
    };
    currentStudent();
    currentCareer();
    currentGoal();
  }, []);

  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);

  return (
    <Grid container>
      <Grid
        item
        style={{
          marginBottom: '3vh',
          color: 'black',
          padding: '0.1vh',
        }}
        sx={{ width: '100%' }}
      >
        <Typography align="center" variant="h3" component="h4">
          {students.studentFirstName} {students.studentLastName}&rsquo;s Details
        </Typography>
      </Grid>
      <Stack direction="row" spacing={2}>
        {isEditing ? (
          <StudentInfoEdit
            students={students}
            goals={goals}
            careers={career}
            onDoneClick={endEditing}
            updateFunction={updateStudentInfo}
          />
        ) : (
          <StudentInfoDisplay student={students} onEditClick={startEditing} />
        )}
        <TabsFunction
          students={students}
          goals={goals}
          careers={career}
          updateFunction={updateStudentInfo}
        />
      </Stack>
    </Grid>
  );
}
