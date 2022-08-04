import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, AppBar, Tab, Tabs, Typography, Stack } from '@mui/material';
import ColorButton from '../coaches/Shared/ColoredButton';
import CreateGoalModal from './create-goal-modal';
import CreateCareerModal from './create-career-modal';

function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      bgcolor="black"
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

export default function DetailsTabDisplay(props) {
  const { onEditClick, students, goals, careers } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ marginRight: '8vh' }}>
      <Box
        sx={{ bgcolor: 'background.paper', width: '100vh', overflowY: 'auto' }}
      >
        <AppBar position="sticky">
          <Tabs
            value={value}
            sx={{ bgcolor: '#2656A5' }}
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
                    Colleges I’ve applied to/plan to apply to:{' '}
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
                  <h3 style={{ color: '#2656A5' }}>
                    College Entrance Exam Information:
                  </h3>
                  <h5>
                    <Stack direction="column">
                      <Grid container>
                        <Grid item xs={2}>
                          PACT Score: {students.pactTestScore}
                        </Grid>
                        <Grid item xs={4}>
                          PACT Date: {getParsedDate(students.pactTestDate)}
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={2}>
                          ACT Score: {students.actTestScore}
                        </Grid>
                        <Grid item xs={4}>
                          ACT Date: {getParsedDate(students.actTestDate)}
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={2}>
                          PSAT Score: {students.psatTestScore}
                        </Grid>
                        <Grid item xs={4}>
                          PSAT Date: {getParsedDate(students.psatTestDate)}
                        </Grid>
                      </Grid>
                      <Grid container>
                        <Grid item xs={2}>
                          SAT Score: {students.satTestScore}
                        </Grid>
                        <Grid item xs={4}>
                          SAT Date: {getParsedDate(students.satTestDate)}
                        </Grid>
                      </Grid>
                    </Stack>
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
                  <CreateGoalModal studentId={students.id} />
                  {goals.map((goal, index) => (
                    <Box key={goal.id}>
                      <h3 style={{ color: '#2656A5' }}>Goal {index + 1}</h3>
                      <h5>Goal: {goal.goalSet}</h5>
                      <h5>Goal Set Date: {getParsedDate(goal.dateGoalSet)}</h5>
                      <h5>SEL: {goal.sel}</h5>
                      <h5>
                        Goal Review Date:{getParsedDate(goal.goalReviewDate)}
                      </h5>
                      <h5>Accomplishment State: {goal.wasItAccomplished}</h5>
                      <h5>Explanation: {goal.explanation}</h5>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '64vh' }}>
                <Grid>
                  <Box>
                    <ColorButton
                      style={{ float: 'right' }}
                      variant="contained"
                      onClick={onEditClick}
                    >
                      Edit
                    </ColorButton>
                    <CreateCareerModal studentId={students.id}>
                      + career
                    </CreateCareerModal>
                    {careers.map((career, index) => {
                      return (
                        <div key={career.id}>
                          <h3 style={{ color: '#2656A5' }}>
                            Career {index + 1}
                          </h3>
                          <h5>
                            I am College Bound: {career.collegeBound.toString()}
                          </h5>
                          <h5>
                            Number of Career Clusters: {career.careerCluster}
                          </h5>
                          <h5>Career of Choice: {career.specificCareer}</h5>
                          <h5>
                            I am Techinical Bound:{' '}
                            {career.technicalCollegeBound.toString()}
                          </h5>
                        </div>
                      );
                    })}
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
                    {String(students.knowGuidanceCounselor)}
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>Admin Details:</h3>
                  <h5>Activity Status: {students.state}</h5>
                  <h3 style={{ color: '#2656A5' }}>Signatures</h3>
                  <h5>Student Signature: {students.studentSignature}</h5>
                  <h5>
                    Date Signed: {getParsedDate(students.studentSignatureDate)}
                  </h5>
                  <h5>Parent Signature: {students.parentSignature}</h5>
                  <h5>
                    Date Signed: {getParsedDate(students.parentSignatureDate)}
                  </h5>
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
  goals: PropTypes.array.isRequired,
  careers: PropTypes.array.isRequired,
};
