import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import ColorButton from '../coaches/Shared/ColoredButton';
import CreateGoalModal from './create-goal-modal';
import AddCareer from './addCareer';

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

export default function DetailsTabDisplay(props) {
  const { onEditClick, students, goals, careers } = props;
  const [value, setValue] = React.useState(0);

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
                    {String(students.collegeApplicationStatus)}
                  </h5>
                  <h5>
                    Colleges I’ve applied to/plan to apply to: 1.{' '}
                    {students.firstChoiceCollege}
                  </h5>
                  <h5>
                    I have begun my work on my college essay:{' '}
                    {String(students.collegeEssayStatus)}
                  </h5>
                  <h5>
                    I need help writing my college essay:{' '}
                    {String(students.collegeEssayHelp)}
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
                    {String(students.financialAidProcessComplete)}
                  </h5>
                  <h5>
                    I need assistance filling out my FAFSA/Financial aid forms:{' '}
                    {String(students.assistanceForForms)}
                  </h5>
                  <h5>Support they need: {String(students.supportNeeded)}</h5>
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
                  <CreateGoalModal studentId={students.id}>
                    + goal
                  </CreateGoalModal>
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
                    <AddCareer studentId={students.id}>+ New Career</AddCareer>
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

DetailsTabDisplay.propTypes = {
  onEditClick: PropTypes.func.isRequired,
  students: PropTypes.object.isRequired,
  goals: PropTypes.object.isRequired,
  careers: PropTypes.object.isRequired,
};
