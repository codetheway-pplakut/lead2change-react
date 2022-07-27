/* eslint-disable react/require-default-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import StudentListModal from '../coaches/StudentListModal';
import {
  getStudents,
  getStudentById,
  updateStudent,
} from '../../services/students/students';
// import { getGoals, addGoal, getGoalById } from '../../services/goals/goals';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const GridText = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function TabsFunction() {
  const [value, setValue] = React.useState(0);
  const { studentId } = useParams();
  // const { goalId } = useParams();
  // const [goals, setGoals] = useState({});
  const [students, setStudents] = useState({});
  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);
  // useEffect(() => {
  //   const currentGoal = async () => {
  //     const currGoal = await getGoalById(goalId);
  //     setGoals(currGoal);
  //   };
  //   currentGoal();
  // }, [goalId]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginRight: '8vh' }}>
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: '#FFFFFF',
                height: '3px',
              },
            }}
          >
            <Tab label="Education" {...a11yProps(0)} />
            <Tab label="Goals" {...a11yProps(1)} />
            <Tab label="Other" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid
                item
                xs={12}
                sx={{ minWidth: 10, height: 'max-content' }}
                style={{ height: '64vh' }}
              >
                <GridText>
                  <h3 style={{ color: '#2656A5' }}>Post Secondary Plan</h3>
                  <h5>
                    Plans After High school: {students.planAfterHighSchool}
                  </h5>
                  <h5>
                    I have applied to a college:{' '}
                    {students.collegeApplicationStatus}
                  </h5>
                  <h5>
                    Colleges I’ve applied to/plan to apply to: 1.{' '}
                    {students.firstChoiceCollege} 2.{' '}
                    {students.secondChoiceCollege}
                    3. {students.thirdChoiceCollege}
                  </h5>
                  <h5>
                    I have begun my work on my college essay:{' '}
                    {students.collegeEssayStatus}
                  </h5>
                  <h5>
                    I need help writing my college essay:{' '}
                    {students.collegeEssayHelp}
                  </h5>
                  <h5>
                    First choice of college: {students.firstChoiceCollege}
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    College Entrance Exam Information:
                  </h3>
                  <h5>
                    PACT Score: {students.pactTestScore}
                    <div>Date of PACT: {students.pactTestDate}</div>
                  </h5>
                  <h5>
                    PSAT Score: {students.psatTestScore}
                    <div> Date of PSAT: {students.psatTestDate}</div>
                  </h5>
                  <h5>
                    ACT Score: {students.actTestScore}
                    <div> Date of ACT: {students.actTestDate}</div>
                  </h5>
                  <h5>
                    SAT Score: {students.satTestScore}
                    <div> Date of SAT: {students.satTestDate} </div>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>Financial Aid:</h3>
                  <h5>
                    I have already completed the financial aid process:{' '}
                    {students.financialAidProcessComplete}
                  </h5>
                  <h5>
                    I need assistance filling out my FAFSA/Financial aid forms:
                    {students.supportNeeded}
                  </h5>
                  <h5>Support they need: None</h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '64vh' }}>
                <GridText>
                  <h3 style={{ color: '#2656A5' }}>Goal One</h3>
                  {/* <h5>Goal: {goals.collegeBound}</h5> */}
                  <h5>Goal Set Date: 3/20/22</h5>
                  <h5>SEL: Responsible-Decision Making</h5>
                  <h5>Goal Review Date: 3/20/23</h5>
                  <h5>
                    Accomplishment State:
                    <p>In progress</p>
                  </h5>
                  <h5>
                    Explanation: Joined multiple clubs, trying to establish a
                    role and get a leadership position
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>Goal Two</h3>
                  <h5>Goal: Make it onto the Varsity Tennis Team</h5>
                  <h5>Goal Set Date: 11/22/21</h5>
                  <h5>SEL:Social Awareness</h5>
                  <h5>Goal Review Date: 4/30/22</h5>
                  <h5>Accomplishment State: In Progress</h5>
                  <h5>
                    Explanation: Tryouts will be in April, currently on JV
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>Goal Three</h3>
                  <h5>Goal: 4.3 GPA</h5>
                  <h5>Goal Set Date: 11/10/21</h5>
                  <h5>SEL: Social Awareness</h5>
                  <h5>Goal Review Date: 6/10/22</h5>
                  <h5>Accomplishment State: In Progress</h5>
                  <h5>
                    Explanation: Trying to get a 4.3 GPA in all of my classes{' '}
                  </h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '64vh' }}>
                <GridText>
                  <h3 style={{ color: '#2656A5' }}>Parent Information</h3>
                  <h5>First Name: {students.parentFirstName}</h5>
                  <h5>Last Name: {students.parentLastName}</h5>
                  <h5>Address: {students.address}</h5>
                  <h5>
                    Parent Apartment Number: {students.parentApartmentNumber}
                  </h5>
                  <h5>City: {students.parentCity}</h5>
                  <h5>State: {students.parentState}</h5>
                  <h5>Zip Code: {students.parentZipCode}</h5>
                  <h5>Home Phone: {students.parentHomePhone}</h5>
                  <h5>Cell Phone: {students.parentCellPhone}</h5>
                  <h5>Parent Email: {students.parentEmail}</h5>
                  <h3 style={{ color: '#2656A5' }}>Guidance Couselor Info:</h3>
                  <h5>
                    I know my guidance counselor:{' '}
                    {students.knowGuidanceCounselor}
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>Admin Details:</h3>
                  <h5>Activity Status: {students.state}</h5>
                  <h3 style={{ color: '#2656A5' }}>Signatures</h3>
                  <h5>Student Signature: {students.studentSignature}</h5>
                  <h5>Date Signed: {students.studentSignatureDate}</h5>
                  <h5>Parent Signature: {students.parentSignature}</h5>
                  <h5>Date Signed: {students.parentSignatureDate}</h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}
