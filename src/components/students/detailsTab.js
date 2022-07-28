import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import { getStudentById } from '../../services/students/students';
import { getGoalById } from '../../services/goals/goals';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const GridText = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

function SignUpDisplay(props) {
  const { onEditClick } = props;
  const [value, setValue] = React.useState(0);
  const { studentId } = useParams();
  const { goalId } = useParams();
  const [goals, setGoals] = useState({});
  const [students, setStudents] = useState({});
  const [careers, setCareers] = useState({});

  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);
      setStudents(currStudent);
    };
    currentStudent();
  }, [studentId]);

  useEffect(() => {
    const currentGoal = async () => {
      const currGoal = await getGoalById(goalId);
      setGoals(currGoal);
    };
    currentGoal();
  }, [goalId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginRight: '8vh' }}>
      <Box sx={{ bgcolor: 'background.paper', width: '100vh' }}>
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
            <Tab label="Education" />
            <Tab label="Goals" />
            <Tab label="Careers" />
            <Tab label="Other" />
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
                <Box>
                  {' '}
                  <Button
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </Button>
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
                    PSAT Score:{' '}
                    <Box component="span" style={{ fontWeight: 'normal' }}>
                      {students.psatTestScore}
                    </Box>{' '}
                    <Box component="span" style={{ marginLeft: '20.3vh' }}>
                      SAT Score:{' '}
                      <Box component="span" style={{ fontWeight: 'normal' }}>
                        {students.satTestDate}
                      </Box>
                    </Box>{' '}
                    <div>
                      Date of PSAT:{' '}
                      <Box component="span" style={{ fontWeight: 'normal' }}>
                        {students.psatTestDate}
                      </Box>
                      <Box component="span" style={{ marginLeft: '23.29vh' }}>
                        Date of SAT:{' '}
                        <Box component="span" style={{ fontWeight: 'normal' }}>
                          {students.satTestDate}
                        </Box>{' '}
                      </Box>
                    </div>
                  </h5>
                  <h5>
                    PACT Score:{' '}
                    <Box component="span" style={{ fontWeight: 'normal' }}>
                      {students.pactTestScore}
                    </Box>{' '}
                    <Box component="span" style={{ marginLeft: '22vh' }}>
                      ACT Score:{' '}
                      <Box component="span" style={{ fontWeight: 'normal' }}>
                        {students.actTestScore}
                      </Box>
                    </Box>
                    <div>
                      {' '}
                      Date of PACT: {students.pactTestDate}
                      <Box component="span" style={{ fontWeight: 'normal' }}>
                        {students.pactTestDate}
                      </Box>
                      <Box component="span" style={{ marginLeft: '23.29vh' }}>
                        Date of PSAT:{' '}
                        <Box component="span" style={{ fontWeight: 'normal' }}>
                          {students.psatTestDate}
                        </Box>{' '}
                      </Box>
                    </div>
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
                </Box>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '64vh' }}>
                <Box>
                  <Button
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </Button>
                  <h3 style={{ color: '#2656A5' }}>Goal One</h3>
                  <h5>Goal: {goals.goalSet}</h5>
                  <h5>Goal Set Date: {goals.dateGoalSet}</h5>
                  <h5>SEL: {goals.sel}</h5>
                  <h5>Goal Review Date:{goals.goalReviewDate}</h5>
                  <h5>
                    Accomplishment State:
                    <p>{goals.wasItAccomplished}</p>
                  </h5>
                  <h5>Explanation: {goals.explanation}</h5>
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
                </Box>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '30vh' }}>
                <Grid>
                  <h3 style={{ color: '#2656A5' }}>Career Information</h3>
                  <h5>I am College Bound: {careers.collegeBound}</h5>
                  <h5>Number of Career Clusters: {careers.careerCluster}</h5>
                  <h5>Career of Choice: {careers.specificCluster}</h5>
                  <h5>
                    I am Techinical Bound: {careers.technicalCollegeBound}
                  </h5>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '64vh' }}>
                <Box>
                  <Button
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </Button>
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
                </Box>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}

SignUpDisplay.propTypes = {
  onEditClick: PropTypes.func.isRequired,
};

function SignUpEdit(props) {
  const { onSaveClick, onCancelClick } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [first, setFirst] = useState('');
  const [newPlanAfterHighSchool, setNewPlanAfterHighSchool] = useState('');
  const [newCollegesList, setNewCollegesList] = useState('');
  const [newFirstChoiceCollege, setNewFirstChoiceCollege] = useState('');
  return (
    <div style={{ marginRight: '8vh' }}>
      <Box sx={{ bgcolor: 'background.paper', width: '100vh' }}>
        <form onSubmit={onSaveClick}>
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
              <Tab label="Education" />
              <Tab label="Goals" />
              <Tab label="Other" />
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
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Post Secondary Plan</h3>

                    <TextField
                      id="text-area-q1"
                      multiline
                      fullWidth
                      maxRows={4}
                      variant="filled"
                      defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                      label="Plans after college"
                      onChange={(event) =>
                        setNewPlanAfterHighSchool(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginTop={2} marginBottom={3}>
                    <TextField
                      id="text-area-q1"
                      multiline
                      fullWidth
                      maxRows={4}
                      variant="filled"
                      defaultValue="1. Purde, 2. Madison, 3. MIT"
                      label="Colleges Plan/Applied To"
                      onChange={(event) =>
                        setNewCollegesList(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="Northwestern"
                      label="College First Choice"
                      onChange={(event) =>
                        setNewFirstChoiceCollege(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginTop={1}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Have Applied To College
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Started College Essay
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Need Help With College Essay
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <h3 style={{ color: '#2656A5' }}>
                    College Entrance Exam Information:
                  </h3>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="35"
                      label="PACT Score"
                      type="number"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="PSAT Date"
                      type="date"
                      defaultValue="2017-05-24"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="35"
                      label="PSAT Score"
                      type="number"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="PSAT Date"
                      type="date"
                      defaultValue="2017-05-24"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="35"
                      label="ACT Score"
                      type="number"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="ACT Date"
                      type="date"
                      defaultValue="2017-05-24"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="35"
                      label="SAT Score"
                      type="number"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="SAT Date"
                      type="date"
                      defaultValue="2017-05-24"
                      onChange={(event) => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <h3 style={{ color: '#2656A5' }}>Financial Aid:</h3>
                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Completed Finacial Aid Process
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Need Help With FAFSA
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={20}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid marginBottom={2}>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Support Needed
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
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
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                        label="Plans after college"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="Responsible-Decision Making"
                        label="SEL"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Accomplishment State{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Age"
                          defaultValue={10}
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>In Progress</MenuItem>
                          <MenuItem value={20}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                        label="Plans after college"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>

                    <h3 style={{ color: '#2656A5' }}>Goal Two</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                        label="Plans after college"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="Responsible-Decision Making"
                        label="SEL"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Accomplishment State{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Age"
                          defaultValue={10}
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>In Progress</MenuItem>
                          <MenuItem value={20}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                        label="Plans after college"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <h3 style={{ color: '#2656A5' }}>Goal Three</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                        label="Plans after college"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="Responsible-Decision Making"
                        label="SEL"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Accomplishment State{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Age"
                          defaultValue={10}
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>In Progress</MenuItem>
                          <MenuItem value={20}>Completed</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        defaultValue="After college i plan to go and get a job as a Software Developer at a company such as google."
                        label="Plans after college"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
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
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="Bob Joe"
                        label="Name"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="12345 demo street"
                        label="Adress"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="40"
                        label="Apt. #"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="Milwaukee"
                        label="City"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="WI"
                        label="State"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="50021"
                        label="Zip Code"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="312-315-5646"
                        label="Home Phone"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="314-654-7821"
                        label="Cell Phone"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="mdijd@gmail.com"
                        label="Email"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <h3 style={{ color: '#2656A5' }}>
                      Guidance Couselor Info:
                    </h3>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Knows Guidance Cousoler{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                    <h3 style={{ color: '#2656A5' }}>Admin Details:</h3>
                    <Grid>
                      <FormControl
                        variant="standard"
                        sx={{ m: 1, minWidth: 200 }}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Activity Status{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Age"
                          defaultValue={10}
                        >
                          <MenuItem value="" />
                          <MenuItem value={10}>Active</MenuItem>
                          <MenuItem value={20}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        Acceptance Status{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        defaultValue={10}
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Accepted</MenuItem>
                        <MenuItem value={20}>Not Accepted</MenuItem>
                      </Select>
                    </FormControl>
                    <h3 style={{ color: '#2656A5' }}>Signatures</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="Aadi Tiwair"
                        label="Student Signiture"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Date Signed"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        defaultValue="John Tiwair"
                        label="Parent Signiture"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Date Signed"
                        type="date"
                        defaultValue="2017-05-24"
                        onChange={(event) => setFirst(event.target.value)}
                        required
                      />
                    </Grid>
                  </GridText>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <Grid align="center">
            <Button variant="contained" type="Submit">
              Save
            </Button>
            {'   '}
            <Button variant="contained" onClick={onCancelClick}>
              Cancel
            </Button>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

SignUpEdit.propTypes = {
  onSaveClick: PropTypes.func.isRequired,
  onCancelClick: PropTypes.func.isRequired,
};

export default function TabsFunction() {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    console.log(studentInfo);
  };

  const cancelStudentInfo = (studentInfo) => {
    console.log('cancel');
  };

  const onSaveClick = (event) => {
    saveStudentInfo();
    endEditing();
    event.preventDefault();
  };

  const onCancelClick = () => {
    cancelStudentInfo();
    cancelEditing();
  };

  return (
    <Grid container>
      {isEditing ? (
        <SignUpEdit onSaveClick={onSaveClick} onCancelClick={onCancelClick} />
      ) : (
        <SignUpDisplay onEditClick={startEditing} />
      )}
    </Grid>
  );
}
