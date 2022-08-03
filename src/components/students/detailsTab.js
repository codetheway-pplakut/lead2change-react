import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ColorButton from '../coaches/Shared/ColoredButton';
import CreateGoalModal from './create-goal-modal';

import { getStudentById } from '../../services/students/students';
import { getGoalsByStudentId } from '../../services/goals/goals';
import {
  getCareersById,
  getStudentCareers,
} from '../../services/careers/careers';

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

function SignUpDisplay(props) {
  const { onEditClick } = props;
  const [value, setValue] = React.useState(0);
  const { studentId } = useParams();
  const [goals, setGoals] = useState([]);
  const [students, setStudents] = useState({});
  const [careers, setCareers] = useState([]);

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
      const currCareer = await getStudentCareers(studentId);
      setCareers(currCareer);
    };
    currentStudent();
    currentGoal();
    currentCareer();
  }, [studentId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // const filteredArray = students.filter((student) => {
  //   return goals.id === goalId;
  // });

  return (
    <div style={{ marginRight: '8vh' }}>
      <Box
        sx={{ bgcolor: 'background.paper', width: '100vh', overflowY: 'auto' }}
      >
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
                  <ColorButton
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </ColorButton>
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
                  <ColorButton
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </ColorButton>
                  <CreateGoalModal studentId={studentId} />
                  <h3 style={{ color: '#2656A5' }}>Goal One</h3>
                  <h5>Goal: {goals.goalSet}</h5>
                  <h5>Goal Set Date: {goals.dateGoalSet}</h5>
                  <h5>SEL: {goals.sel}</h5>
                  <h5>Goal Review Date:{goals.goalReviewDate}</h5>
                  <h5>Accomplishment State: {goals.wasItAccomplished}</h5>
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
                  <Box>
                    <ColorButton
                      style={{ float: 'right' }}
                      variant="contained"
                      onClick={onEditClick}
                    >
                      Edit
                    </ColorButton>
                    <AddCareer studentId={studentId}>+ New Career</AddCareer>
                    <h3 style={{ color: '#2656A5' }}>Career Information</h3>
                    <h5>I am College Bound: {careers.collegeBound}</h5>
                    <h5>Number of Career Clusters: {careers.careerCluster}</h5>
                    <h5>Career of Choice: {careers.specificCluster}</h5>
                    <h5>
                      I am Techinical Bound: {careers.technicalCollegeBound}
                    </h5>
                  </Box>
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
                  <ColorButton
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </ColorButton>
                  <h3 style={{ color: '#2656A5' }}>Parent Information</h3>
                  <h5>First Name: {students.parentFirstName}</h5>
                  <h5>Last Name: {students.parentLastName}</h5>
                  <h5>Address: {students.address}</h5>
                  <h5>Apartment Number: {students.parentApartmentNumber}</h5>
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

function AddCareer(props) {
  const { studentId } = useParams;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [careers, setCareers] = useState([]);
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
  const [enteredIsCollegeBound, setEnteredIsCollegeBound] = React.useState('');

  const [enteredCareerCluster, setEnteredCareerCluster] = React.useState('');

  const [enteredSpecificCluster, setEnteredSpecificCluster] =
    React.useState('');

  const [enteredTechnicalCollegeBound, setEnteredTechnicalCollegeBound] =
    React.useState('');

  useEffect(() => {
    const currentCareer = async () => {
      // const currCareers = await getCareersById(studentId);
      // setCareers(currCareers);
      // const {
      //   collegeBound,
      //   careerCluster,
      //   specificCluster,
      //   technicalCollegeBound,
      // } = currCareer;
      // setStudents(currCareer);
      // setEnteredIsCollegeBound(collegeBound);
      // setEnteredCareerCluster(careerCluster);
      // setEnteredSpecificCluster(specificCluster);
      // setEnteredTechnicalCollegeBound(technicalCollegeBound);
    };
    currentCareer();
  }, [studentId]);

  return (
    <div>
      <ColorButton variant="contained" onClick={handleOpen}>
        + New Career
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
                  <Typography variant="h5" component="h2" align="center">
                    New Career
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
          <Grid item xs={12}>
            <Grid container spacing={1} sx={{ p: 2 }} justifyContent="center">
              <Grid item xs={12}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: '40vh' }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    I am College Bound{' '}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="College Bound?"
                    fullWidth
                    value={enteredIsCollegeBound}
                    onChange={(event) =>
                      setEnteredIsCollegeBound(event.target.value)
                    }
                  >
                    <MenuItem value="" />
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    minWidth: '42vh',
                    marginBottom: '1.5vh',
                    marginLeft: '2vh',
                  }}
                >
                  <InputLabel id="demo-simple-select-standard-label">
                    I am Technical Bound{' '}
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="Technical Bound?"
                    value={enteredTechnicalCollegeBound}
                    onChange={(event) =>
                      setEnteredTechnicalCollegeBound(event.target.value)
                    }
                  >
                    <MenuItem value="" />
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={12} sx={{ marginBottom: '1.5vh' }}>
                  <TextField
                    size="small"
                    className="typing-container"
                    variant="outlined"
                    value={enteredCareerCluster}
                    label="Number of Career Clusters"
                    fullWidth
                    onChange={(event) =>
                      setEnteredCareerCluster(event.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: '1.5vh' }}>
                  <TextField
                    size="small"
                    className="typing-container"
                    value={enteredSpecificCluster}
                    fullWidth
                    label="Career of Choice"
                    onChange={(event) =>
                      setEnteredSpecificCluster(event.target.value)
                    }
                    required
                  />
                </Grid>
                <Grid item xs={2}>
                  <ColorButton
                    variant="contained"
                    fullWidth
                    style={{ marginBottom: '1.5vh' }}
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

function SignUpEdit(props) {
  const { onCancelClick, updateFunction } = props;
  const { studentId } = useParams();
  const [value, setValue] = React.useState(0);
  const [students, setStudents] = useState({});
  const [goals, setGoals] = useState([]);
  const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [enteredPlanAfterHighSchool, setEnteredPlanAfterHighSchool] =
    React.useState('');

  const [enteredCollegesList, setEnteredCollegesList] = React.useState('');

  const [enteredFirstChoiceCollege, setEnteredFirstChoiceCollege] =
    React.useState('');

  const [enteredCollegeApplicationStatus, setEnteredCollegeApplicationStatus] =
    React.useState('');

  const [enteredCollegeEssayStatus, setEnteredCollegeEssayStatus] =
    React.useState('');

  const [enteredCollegeEssayHelp, setEnteredCollegeEssayHelp] =
    React.useState('');

  const [enteredPactTestScore, setEnteredPactTestScore] = React.useState('');

  const [enteredPsatTestDate, setEnteredPsatTestDate] = React.useState('');

  const [enteredPsatTestScore, setEnteredPsatTestScore] = React.useState('');

  const [enteredPactTestDate, setEnteredPactTestDate] = React.useState('');

  const [enteredActTestScore, setEnteredActTestScore] = React.useState('');

  const [enteredActTestDate, setEnteredActTestDate] = React.useState('');

  const [enteredSatTestScore, setEnteredSatTestScore] = React.useState('');

  const [enteredSatTestDate, setEnteredSatTestDate] = React.useState('');

  const [
    enteredFinancialAidProcessComplete,
    setEnteredFinancialAidProcessComplete,
  ] = React.useState('');

  const [enteredAssistanceForForms, setEnteredAssistanceForForms] =
    React.useState('');

  const [enteredSupportNeeded, setEnteredSupportNeeded] = React.useState('');

  const [enteredGoalSet, setEnteredGoalSet] = React.useState('');

  const [enteredDateGoalSet, setEnteredDateGoalSet] = React.useState('');

  const [enteredSel, setEnteredSel] = React.useState('');

  const [enteredGoalReviewDate, setEnteredGoalReviewDate] = React.useState('');

  const [enteredWasItAccomplished, setEnteredWasItAccomplished] =
    React.useState('');

  const [enteredExplanation, setEnteredExplanation] = React.useState('');

  const [enteredParentFirstName, setEnteredParentFirstName] =
    React.useState('');

  const [enteredParentAddress, setEnteredParentAddress] = React.useState('');

  const [enteredParentApartmentNumber, setEnteredParentApartmentNumber] =
    React.useState('');

  const [enteredParentCity, setEnteredParentCity] = React.useState('');

  const [enteredParentState, setEnteredParentState] = React.useState('');

  const [enteredParentZipCode, setEnteredParentZipCode] = React.useState('');

  const [enteredParentCellPhone, setEnteredParentCellPhone] =
    React.useState('');

  const [enteredParentEmail, setEnteredParentEmail] = React.useState('');

  const [enteredGuidanceCounselor, setEnteredGuidanceCounselor] =
    React.useState('');

  // const [enteredWorkStatus, setEnteredWorkStatus] = React.useState('');

  // const [enteredAcceptanceState, setEnteredAcceptanceStatus] =
  //   React.useState('');

  const [enteredStudentSignature, setEnteredStudentSignature] =
    React.useState('');

  const [enteredStudentSignatureDate, setEnteredStudentSignatureDate] =
    React.useState('');

  const [enteredParentSignature, setEnteredParentSignature] =
    React.useState('');

  const [enteredParentSignatureDate, setEnteredParentSignatureDate] =
    React.useState('');

  const [enteredIsCollegeBound, setEnteredIsCollegeBound] = React.useState('');

  const [enteredCareerCluster, setEnteredCareerCluster] = React.useState('');

  const [enteredSpecificCluster, setEnteredSpecificCluster] =
    React.useState('');

  const [enteredTechnicalCollegeBound, setEnteredTechnicalCollegeBound] =
    React.useState('');

  const EditField = () => {
    handleClose();
    const updatedStudent = {
      id: students.id, // TODO : Update to agreed ID creation method
      planAfterHighSchool: enteredPlanAfterHighSchool,
      collegesList: enteredCollegesList,
      firstChoiceCollege: enteredFirstChoiceCollege,
      collegeApplicationStatus: enteredCollegeApplicationStatus,
      collegeEssayStatus: enteredCollegeEssayStatus,
      collegeEssayHelp: enteredCollegeEssayHelp,
      pactTestScore: enteredPactTestScore,
      psatTestDate: enteredPsatTestDate,
      psatTestScore: enteredPsatTestScore,
      pactTestDate: enteredPactTestDate,
      actTestScore: enteredActTestScore,
      actTestDate: enteredActTestDate,
      satTestScore: enteredSatTestScore,
      satTestDate: enteredSatTestDate,
      // goalSet: enteredGoalSet,
      // dateGoalSet: enteredGoalSet,
      // sel: enteredSel,
      // goalReviewDate: enteredGoalReviewDate,
      // wasItAccomplished: enteredWasItAccomplished,
      // explanation: enteredExplanation,
      parentFirstName: enteredParentFirstName,
      address: enteredParentAddress,
      parentApartmentNumber: enteredParentApartmentNumber,
      parentCity: enteredParentCity,
      parentState: enteredParentState,
      parentZipCode: enteredParentZipCode,
      parentCellPhone: enteredParentCellPhone,
      parentEmail: enteredParentEmail,
      knowGuidanceCounselor: enteredGuidanceCounselor,
      // workStatus: enteredWorkStatus,
      // acceptanceState: enteredAcceptanceState,
      studentSignature: enteredStudentSignature,
      studentSignatureDate: enteredStudentSignatureDate,
      parentSignature: enteredParentSignature,
      parentSignatureDate: enteredParentSignatureDate,
      collegeBound: enteredIsCollegeBound,
      careerCluster: enteredCareerCluster,
      specificCluster: enteredSpecificCluster,
      technicalCollegeBound: enteredTechnicalCollegeBound,
    };
    updateFunction(updatedStudent);
  };
  useEffect(() => {
    const currentStudent = async () => {
      const currStudent = await getStudentById(studentId);

      const {
        planAfterHighSchool,
        collegesList,
        firstChoiceCollege,
        collegeApplicationStatus,
        collegeEssayStatus,
        collegeEssayHelp,
        pactTestScore,
        psatTestDate,
        psatTestScore,
        pactTestDate,
        actTestScore,
        actTestDate,
        satTestScore,
        satTestDate,
        parentFirstName,
        address,
        parentApartmentNumber,
        parentCity,
        parentZipCode,
        parentState,
        parentCellPhone,
        parentEmail,
        knowGuidanceCounselor,
        // workStatus,
        // acceptanceStatus,
        studentSignature,
        studentSignatureDate,
        parentSignature,
        parentSignatureDate,
      } = currStudent;
      setStudents(currStudent);

      setEnteredPlanAfterHighSchool(planAfterHighSchool);
      setEnteredCollegesList(collegesList);
      setEnteredFirstChoiceCollege(firstChoiceCollege);
      setEnteredCollegeApplicationStatus(collegeApplicationStatus);
      setEnteredCollegeEssayStatus(collegeEssayStatus);
      setEnteredCollegeEssayHelp(collegeEssayHelp);
      setEnteredPactTestScore(pactTestScore);
      setEnteredPsatTestDate(psatTestDate);
      setEnteredPsatTestScore(psatTestScore);
      setEnteredPactTestDate(pactTestDate);
      setEnteredActTestScore(actTestScore);
      setEnteredActTestDate(actTestDate);
      setEnteredSatTestScore(satTestScore);
      setEnteredSatTestDate(satTestDate);
      setEnteredParentFirstName(parentFirstName);
      setEnteredParentAddress(address);
      setEnteredParentApartmentNumber(parentApartmentNumber);
      setEnteredParentCity(parentCity);
      setEnteredParentState(parentState);
      setEnteredParentZipCode(parentZipCode);
      setEnteredParentCellPhone(parentCellPhone);
      setEnteredParentEmail(parentEmail);
      setEnteredGuidanceCounselor(knowGuidanceCounselor);
      setEnteredStudentSignature(studentSignature);
      setEnteredStudentSignatureDate(studentSignatureDate);
      setEnteredParentSignature(parentSignature);
      setEnteredParentSignatureDate(parentSignatureDate);
    };

    const currentGoal = async () => {
      const currGoal = await getGoalsByStudentId(studentId);
      setGoals(currGoal);
      // const {
      //   goalSet,
      //   dateGoalSet,
      //   sel,
      //   goalReviewDate,
      //   wasItAccomplished,
      //   explanation,
      // } = currGoal;
      // setGoals(currGoal);

      // setEnteredGoalSet(goalSet);
      // setEnteredDateGoalSet(dateGoalSet);
      // setEnteredSel(sel);
      // setEnteredGoalReviewDate(goalReviewDate);
      // setEnteredWasItAccomplished(wasItAccomplished);
      // setEnteredExplanation(explanation);
    };

    const currentCareer = async () => {
      const currCareer = await getCareersById(studentId);

      // const {
      //   collegeBound,
      //   careerCluster,
      //   specificCluster,
      //   technicalCollegeBound,
      // } = currCareer;
      // setStudents(currCareer);

      // setEnteredIsCollegeBound(collegeBound);
      // setEnteredCareerCluster(careerCluster);
      // setEnteredSpecificCluster(specificCluster);
      // setEnteredTechnicalCollegeBound(technicalCollegeBound);
    };
    currentCareer();
    currentStudent();
    currentGoal();
  }, [studentId]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [first, setFirst] = useState('');
  // const [newPlanAfterHighSchool, setNewPlanAfterHighSchool] = useState('');
  // const [newCollegesList, setNewCollegesList] = useState('');
  // const [newFirstChoiceCollege, setNewFirstChoiceCollege] = useState('');
  return (
    <div style={{ marginRight: '8vh' }}>
      <Box
        sx={{ bgcolor: 'background.paper', width: '100vh', overflowY: 'auto' }}
      >
        <form onSubmit={EditField}>
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
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Post Secondary Plan</h3>

                    <TextField
                      fullWidth
                      variant="filled"
                      value={enteredPlanAfterHighSchool}
                      label="Plans after High School"
                      onChange={(e) =>
                        setEnteredPlanAfterHighSchool(e.target.value)
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
                      value={enteredCollegesList}
                      label="Colleges Plan/Applied To"
                      onChange={(event) =>
                        setEnteredCollegesList(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredFirstChoiceCollege}
                      label="College First Choice"
                      onChange={(event) =>
                        setEnteredFirstChoiceCollege(event.target.value)
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
                        value={enteredCollegeApplicationStatus}
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
                        value={enteredCollegeEssayStatus}
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
                        value={enteredCollegeEssayHelp}
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
                      value={enteredPactTestScore}
                      label="PACT Score"
                      type="number"
                      onChange={(event) =>
                        setEnteredPactTestScore(event.target.value)
                      }
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="PACT Date"
                      type="date"
                      value={enteredPactTestDate}
                      onChange={(event) =>
                        setEnteredPactTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredPsatTestScore}
                      label="PSAT Score"
                      type="number"
                      onChange={(e) => setEnteredPsatTestScore(e.target.value)}
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="PSAT Date"
                      type="date"
                      value={enteredPsatTestDate}
                      onChange={(event) =>
                        setEnteredPsatTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredActTestScore}
                      label="ACT Score"
                      type="number"
                      onChange={(event) =>
                        setEnteredActTestScore(event.target.value)
                      }
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="ACT Date"
                      type="date"
                      value={enteredActTestDate}
                      onChange={(event) =>
                        setEnteredActTestDate(event.target.value)
                      }
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      value={enteredSatTestScore}
                      label="SAT Score"
                      type="number"
                      onChange={(event) =>
                        setEnteredSatTestScore(event.target.value)
                      }
                      required
                    />
                    <TextField
                      size="small"
                      className="typing-container"
                      label="SAT Date"
                      type="date"
                      value={enteredSatTestDate}
                      onChange={(event) =>
                        setEnteredSatTestDate(event.target.value)
                      }
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
                        value={enteredFinancialAidProcessComplete}
                        onChange={(event) =>
                          setEnteredFinancialAidProcessComplete(
                            event.target.value
                          )
                        }
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
                        value={enteredAssistanceForForms}
                        onChange={(event) =>
                          setEnteredAssistanceForForms(event.target.value)
                        }
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
                        value={enteredSupportNeeded}
                        onChange={(event) =>
                          setEnteredSupportNeeded(event.target.value)
                        }
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
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Goal One</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        id="text-area-q1"
                        multiline
                        fullWidth
                        maxRows={4}
                        variant="filled"
                        value={enteredGoalSet}
                        label="Set Goal"
                        onChange={(event) =>
                          setEnteredGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="string"
                        value={enteredDateGoalSet}
                        onChange={(event) =>
                          setEnteredDateGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSel}
                        label="SEL"
                        onChange={(event) => setEnteredSel(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="string"
                        label="Review Date"
                        value={enteredGoalReviewDate}
                        onChange={(event) =>
                          setEnteredGoalReviewDate(event.target.value)
                        }
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
                          value={enteredWasItAccomplished}
                          onChange={(event) =>
                            setEnteredWasItAccomplished(event.target.value)
                          }
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
                        value={enteredExplanation}
                        label="Explanation"
                        onChange={(event) =>
                          setEnteredExplanation(event.target.value)
                        }
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
                        value={enteredGoalSet}
                        label="Set Goal"
                        onChange={(event) =>
                          setEnteredGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        value={enteredDateGoalSet}
                        onChange={(event) =>
                          setEnteredDateGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSel}
                        label="SEL"
                        onChange={(event) => setEnteredSel(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        value={enteredGoalReviewDate}
                        onChange={(event) =>
                          setEnteredGoalReviewDate(event.target.value)
                        }
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
                          value={enteredWasItAccomplished}
                          onChange={(event) =>
                            setEnteredWasItAccomplished(event.target.value)
                          }
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
                        value={enteredExplanation}
                        label="Explanation"
                        onChange={(event) =>
                          setEnteredExplanation(event.target.value)
                        }
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
                        value={enteredGoalSet}
                        label="Set Goal"
                        onChange={(event) =>
                          setEnteredGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Set Date"
                        type="date"
                        value={enteredDateGoalSet}
                        onChange={(event) =>
                          setEnteredDateGoalSet(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSel}
                        label="SEL"
                        onChange={(event) => setEnteredSel(event.target.value)}
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        type="date"
                        label="Review Date"
                        value={enteredGoalReviewDate}
                        onChange={(event) =>
                          setEnteredGoalReviewDate(event.target.value)
                        }
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
                          value={enteredWasItAccomplished}
                          onChange={(event) =>
                            setEnteredWasItAccomplished(event.target.value)
                          }
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
                        value={enteredExplanation}
                        label="Explanation"
                        onChange={(event) =>
                          setEnteredExplanation(event.target.value)
                        }
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} style={{ height: '64vh' }}>
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Career Information</h3>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: '22vh' }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        I am College Bound{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="College Bound?"
                        fullWidth
                        value={enteredIsCollegeBound}
                        onChange={(event) =>
                          setEnteredIsCollegeBound(event.target.value)
                        }
                      >
                        <MenuItem value="" />
                        <MenuItem value={10}>Yes</MenuItem>
                        <MenuItem value={20}>No</MenuItem>
                      </Select>
                    </FormControl>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredCareerCluster}
                        label="Number of Career Clusters"
                        onChange={(event) =>
                          setEnteredCareerCluster(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredSpecificCluster}
                        label="Career of Choice"
                        onChange={(event) =>
                          setEnteredSpecificCluster(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <FormControl
                      variant="standard"
                      sx={{ m: 1, minWidth: 200 }}
                    >
                      <InputLabel id="demo-simple-select-standard-label">
                        I am Technical Bound{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Technical Bound?"
                        value={enteredTechnicalCollegeBound}
                        onChange={(event) =>
                          setEnteredTechnicalCollegeBound(event.target.value)
                        }
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
          <TabPanel value={value} index={3} style={{ overflowY: 'auto' }}>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container justifyContent="flex-end">
                <Grid item xs={12} style={{ height: '64vh' }}>
                  <Grid>
                    <h3 style={{ color: '#2656A5' }}>Parent Information</h3>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentFirstName}
                        label="Name"
                        onChange={(event) =>
                          setEnteredParentFirstName(event.target.value)
                        }
                        required
                      />
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentAddress}
                        label="Address"
                        onChange={(event) =>
                          setEnteredParentAddress(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentApartmentNumber}
                        label="Apt. #"
                        onChange={(event) =>
                          setEnteredParentApartmentNumber(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentCity}
                        label="City"
                        onChange={(event) =>
                          setEnteredParentCity(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentState}
                        label="State"
                        onChange={(event) =>
                          setEnteredParentState(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentZipCode}
                        label="Zip Code"
                        onChange={(event) =>
                          setEnteredParentZipCode(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentCellPhone}
                        label="Cell Phone"
                        onChange={(event) =>
                          setEnteredParentCellPhone(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentEmail}
                        label="Email"
                        onChange={(event) =>
                          setEnteredParentEmail(event.target.value)
                        }
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
                        Knows Guidance Counselor{' '}
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        label="Age"
                        value={enteredGuidanceCounselor}
                        onChange={(event) =>
                          setEnteredGuidanceCounselor(event.target.value)
                        }
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
                          Work Status{' '}
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          label="Work Status"
                          // value={enteredWorkStatus}
                          defaultValue={10}
                          // onChange={(event) =>
                          //   setEnteredWorkStatus(event.target.value)
                          // }
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
                        label="Acceptance Status"
                        defaultValue={10}
                        // value={enteredAcceptanceStatus}
                        // onChange={(event) =>
                        //   setEnteredAcceptanceStatus(event.target.value)
                        // }
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
                        value={enteredStudentSignature}
                        label="Student Signature"
                        onChange={(event) =>
                          setEnteredStudentSignature(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Date Signed"
                        type="date"
                        value={enteredStudentSignatureDate}
                        onChange={(event) =>
                          setEnteredStudentSignatureDate(event.target.value)
                        }
                        required
                      />
                    </Grid>

                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        value={enteredParentSignature}
                        label="Parent Signature"
                        onChange={(event) =>
                          setEnteredParentSignature(event.target.value)
                        }
                        required
                      />
                    </Grid>
                    <Grid marginBottom={2}>
                      <TextField
                        size="small"
                        className="typing-container"
                        label="Date Signed"
                        type="date"
                        value={enteredParentSignatureDate}
                        onChange={(event) =>
                          setEnteredParentSignatureDate(event.target.value)
                        }
                        required
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </TabPanel>
          <Grid align="center">
            <ColorButton variant="contained" type="Submit" onClick={EditField}>
              Save
            </ColorButton>
            {'   '}
            <ColorButton variant="contained" onClick={onCancelClick}>
              Cancel
            </ColorButton>
          </Grid>
        </form>
      </Box>
    </div>
  );
}

SignUpEdit.propTypes = {
  onCancelClick: PropTypes.func.isRequired,
  updateFunction: PropTypes.func.isRequired,
};

export default function TabsFunction() {
  const [isEditing, setIsEditing] = useState(false);
  const startEditing = () => setIsEditing(true);
  const endEditing = () => setIsEditing(false);
  const cancelEditing = () => setIsEditing(false);

  const saveStudentInfo = (studentInfo) => {
    // console.log(studentInfo);
  };

  const cancelStudentInfo = (studentInfo) => {
    // console.log('cancel');
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
