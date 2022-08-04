import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
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
  const [goals, setGoals] = useState([]);
  const [career, setCareer] = useState([]);
  const { studentId } = useParams();
  const [students, setStudents] = useState({});

  const refreshStudents = async () => {
    const result = await getStudentById(studentId);
    setStudents(result);
  };

  const updateStudentInfo = async (student) => {
    await updateStudent(student);
    await refreshStudents();
  };

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
    const currentGoal = async () => {
      const currGoal = await getGoalsByStudentId(studentId);
      setGoals(currGoal);
    };

    const currentCareer = async () => {
      const currCareer = await getCareersById(studentId);
      setCareer(currCareer);
    };
    currentCareer();
    currentGoal();
  }, [studentId]);

  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    updateStudent(studentInfo);
    refreshStudents();
  };

  const onSaveClick = async (event) => {
    saveStudentInfo(students);
    endEditing();
  };

  const onCancelClick = () => {
    cancelEditing();
  };

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
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="center">
          <div>
            {isEditing ? (
              <StudentInfoEdit
                students={students}
                goals={goals}
                careers={career}
                onSaveClick={onSaveClick}
                onCancelClick={onCancelClick}
                updateFunction={updateStudentInfo}
              />
            ) : (
              <StudentInfoDisplay
                students={students}
                goals={goals}
                careers={career}
                onEditClick={startEditing}
              />
            )}
          </div>
          <div>
            <TabsFunction
              students={students}
              goals={goals}
              careers={career}
              updateFunction={updateStudentInfo}
            />
          </div>
        </Stack>
      </Grid>
    </Grid>
  );
}
