/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      // eslint-disable-next-line react/jsx-props-no-spreading
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
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Education" {...a11yProps(0)} />
            <Tab label="Goals" {...a11yProps(1)} />
            <Tab label="Other" {...a11yProps(2)} />
          </Tabs>
        </Box>
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
                    Plans After College: After College I plan to go and get a
                    job as a Software Developer at a company such as google.
                  </h5>
                  <h5>I have applied to a college: Yes</h5>
                  <h5>
                    Colleges I’ve applied to/plan to apply to: 1. UW-Madison 2.
                    Northwestern 3. Purdue
                  </h5>
                  <h5>I have begun my work on my college essay: Yes</h5>
                  <h5>I need help writing my college essay: No</h5>
                  <h5>First choice of college: Northwestern</h5>
                  <h3 style={{ color: '#2656A5' }}>
                    College Entrance Exam Information:
                  </h3>
                  <h5>
                    PACT Score: 35
                    <div>Date of PACT: 10/22/2021</div>
                  </h5>
                  <h5>
                    PSAT Score: 1500
                    <div> Date of PSAT: 11/29/2021</div>
                  </h5>
                  <h5>
                    ACT Score: 34
                    <div> Date of ACT: 3/3/2022</div>
                  </h5>
                  <h5>
                    SAT Score: 1580
                    <div> Date of SAT: 5/19/2022 </div>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>Financial Aid:</h3>
                  <h5>
                    I have already completed the financial aid process: No
                  </h5>
                  <h5>
                    I need assistance filling out my FAFSA/Financial aid forms:
                    No
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
                  <h5>Goal: Be able to become a leader for a school club</h5>
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
                  <h5>First Name: Bob</h5>
                  <h5>Last Name: Doe</h5>
                  <h5>Address: 12345 Demo Street</h5>
                  <h5>Parent Apartment Number: 42</h5>
                  <h5>City: Milwaukee</h5>
                  <h5>State: Wisconsin</h5>
                  <h5>Zip Code: 50021</h5>
                  <h5>Home Phone: 421-422-4123</h5>
                  <h5>Cell Phone: 234-567-8901</h5>
                  <h5>Parent Email: doeB@gmail.com</h5>
                  <h3 style={{ color: '#2656A5' }}>Guidance Couselor Info:</h3>
                  <h5>I know my guidance counselor: Yes</h5>
                  <h3 style={{ color: '#2656A5' }}>Admin Details:</h3>
                  <h5>Activity Status: Active</h5>
                  <h5>Acceptance Status: Accepted</h5>
                  <h3 style={{ color: '#2656A5' }}>Signatures</h3>
                  <h5>Student Signature: Aadi Tiwari</h5>
                  <h5>Date Signed: 2/1/22</h5>
                  <h5>Parent Signature: Bob Doe</h5>
                  <h5>Date Signed: 2/1/22</h5>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
      </Box>
    </div>
  );
}
