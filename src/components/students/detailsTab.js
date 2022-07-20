/* eslint-disable react/require-default-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';

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
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Box sx={{ bgcolor: 'background.paper', width: '100%' }}>
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
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
                style={{ height: '70vh' }}
              >
                <GridText>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Post Secondary Plan</b>
                  </h3>
                  <h5>
                    <b>
                      Plans After College: After College I plan to go and get a
                      job as a Software Developer at a company such as google.
                    </b>
                  </h5>
                  <h5>
                    <b>I have applied to a college: Yes </b>
                  </h5>
                  <h5>
                    <b>
                      Colleges I’ve applied to/plan to apply to: 1. UW-Madison
                      2. Northwestern 3. Purdue
                    </b>
                  </h5>
                  <h5>
                    <b>I have begun my work on my college essay: Yes</b>
                  </h5>
                  <h5>
                    <b>I need help writing my college essay: No</b>
                  </h5>
                  <h5>
                    <b>First choice of college: Northwestern</b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>College Entrance Exam Information: </b>
                  </h3>
                  <h5>
                    <b>
                      PACT Score: 35
                      <div>Date of PACT: 10/22/2021</div>
                    </b>
                  </h5>
                  <h5>
                    <b>
                      PSAT Score: 1500
                      <div> Date of PSAT: 11/29/2021</div>
                    </b>
                  </h5>
                  <h5>
                    <b>
                      ACT Score: 34
                      <div> Date of ACT: 3/3/2022</div>
                    </b>
                  </h5>
                  <h5>
                    <b>
                      SAT Score: 1580
                      <div> Date of SAT: 5/19/2022 </div>
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Financial Aid:</b>
                  </h3>
                  <h5>
                    <b>
                      I have already completed the financial aid process: No
                    </b>
                  </h5>
                  <h5>
                    <b>
                      I need assistance filling out my FAFSA/Financial aid
                      forms: No
                    </b>
                  </h5>
                  <h5>
                    <b>Support they need: None</b>
                  </h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '70vh' }}>
                <GridText>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Goal One</b>
                  </h3>
                  <h5>
                    <b>Goal: Be able to become a leader for a school club </b>
                  </h5>
                  <h5>
                    <b>Goal Set Date: 3/20/22 </b>
                  </h5>
                  <h5>
                    <b>SEL: Responsible-Decision Making </b>
                  </h5>
                  <h5>
                    <b>Goal Review Date: 3/20/23 </b>
                  </h5>
                  <h5>
                    <b>Accomplishment State: </b>
                    <p>In progress</p>
                  </h5>
                  <h5>
                    <b>
                      Explanation: Joined multiple clubs, trying to establish a
                      role and get a leadership position
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Goal Two</b>
                  </h3>
                  <h5>
                    <b>Goal: Make it onto the Varsity Tennis Team </b>
                  </h5>
                  <h5>
                    <b>Goal Set Date: 11/22/21</b>
                  </h5>
                  <h5>
                    <b>SEL:Social Awareness </b>
                  </h5>
                  <h5>
                    <b>Goal Review Date: 4/30/22 </b>
                  </h5>
                  <h5>
                    <b>Accomplishment State: In Progress </b>
                  </h5>
                  <h5>
                    <b>
                      Explanation: Tryouts will be in April, currently on JV
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Goal Three</b>
                  </h3>
                  <h5>
                    <b>Goal: 4.3 GPA </b>
                  </h5>
                  <h5>
                    <b>Goal Set Date: 11/10/21 </b>
                  </h5>
                  <h5>
                    <b>SEL: Social Awareness</b>
                  </h5>
                  <h5>
                    <b>Goal Review Date: 6/10/22 </b>
                  </h5>
                  <h5>
                    <b>Accomplishment State: In Progress </b>
                  </h5>
                  <h5>
                    <b>
                      Explanation: Trying to get a 4.3 GPA in all of my classes{' '}
                    </b>
                  </h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2} style={{ overflowY: 'auto' }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={12} style={{ height: '70vh' }}>
                <GridText>
                  <h3>
                    <b style={{ color: '#2656A5' }}>Parent Information</b>
                  </h3>
                  <h5>
                    <b>First Name: Bob </b>
                  </h5>
                  <h5>
                    <b>Last Name: Doe </b>
                  </h5>
                  <h5>
                    <b>Address: 12345 Demo Street </b>
                  </h5>
                  <h5>
                    <b>Parent Apartment Number: 42 </b>
                  </h5>
                  <h5>
                    <b>City: Milwaukee </b>
                  </h5>
                  <h5>
                    <b>State: Wisconsin </b>
                  </h5>
                  <h5>
                    <b>Zip Code: 50021 </b>
                  </h5>
                  <h5>
                    <b>Home Phone: 421-422-4123 </b>
                  </h5>
                  <h5>
                    <b>Cell Phone: 234-567-8901 </b>
                  </h5>
                  <h5>
                    <b>Parent Email: doeB@gmail.com </b>
                  </h5>
                  <h3>
                    <b style={{ color: '#2656A5' }}>Guidance Couselor Info: </b>
                  </h3>
                  <h5>
                    <b>I know my guidance counselor: Yes </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Admin Details: </b>
                  </h3>
                  <h5>
                    <b>Activity Status: Active </b>
                  </h5>
                  <h5>
                    <b>Acceptance Status: Accepted </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Signatures </b>
                  </h3>
                  <h5>
                    <b>Student Signature: Aadi Tiwari</b>
                  </h5>
                  <h5>
                    <b>Date Signed: 2/1/22 </b>
                  </h5>
                  <h5>
                    <b>Parent Signature: Bob Doe </b>
                  </h5>
                  <h5>
                    <b>Date Signed: 2/1/22 </b>
                  </h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}
