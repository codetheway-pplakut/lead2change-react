/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

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

const dataTheme = createTheme({
  typography: {
    heading6: {
      fontSize: 12,
      fontWeight: 400,
    },
    body1: {
      fontSize: 12,
    },
  },
});

export default function TabsFunction() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={dataTheme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange}>
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
                style={{ height: '65vh' }}
              >
                <GridText>
                  <Typography
                    variant="h6"
                    sx={{ mt: '2vh' }}
                    style={{ color: '#2656A5' }}
                  >
                    Post Secondary Plan
                  </Typography>
                  <Typography variant="b" sx={{ mt: '2vh' }}>
                    Plans After College: After college I plan to go and get a
                    job as a software seveloper at a company such as Google, and
                    do my best to rise through the ranks once there.
                  </Typography>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      I have applied to a college: Yes
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      Colleges I’ve applied to/plan to apply to: 1. UW-Madison
                      2. Northwestern 3. Purdue
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      I have begun my work on my college essay: Yes
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      I need help writing my college essay: No
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      First choice of college: Northwestern
                    </Typography>
                  </div>
                  <Typography
                    variant="h6"
                    sx={{ mt: '2vh' }}
                    style={{ color: '#2656A5' }}
                  >
                    College Entrance Exam Information:
                  </Typography>
                  <Typography variant="b" sx={{ mt: '2vh' }}>
                    PACT Score: 4<div>Date of PACT: 10/22/2021</div>
                  </Typography>
                  <Typography variant="b" sx={{ mt: '2vh' }}>
                    PSAT Score: 10
                    <div> Date of PSAT: 11/29/2021</div>
                  </Typography>
                  <Typography variant="b" sx={{ mt: '2vh' }}>
                    ACT Score: 3<div> Date of ACT: 3/3/2022</div>
                  </Typography>
                  <Typography variant="b" sx={{ mt: '2vh' }}>
                    SAT Score: 9<div> Date of SAT: 5/19/2022 </div>
                  </Typography>
                  <div>
                    <Typography
                      variant="h6"
                      sx={{ mt: '2vh' }}
                      style={{ color: '#2656A5' }}
                    >
                      Financial Aid:
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      I have already completed the financial aid process: No
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      I need assistance filling out my FAFSA/Financial aid
                      forms: No
                    </Typography>
                  </div>
                  <div>
                    <Typography variant="b" sx={{ mt: '2vh' }}>
                      Support they need: None
                    </Typography>
                  </div>
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
                    <b>Goal: 4.0 GPA </b>
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
                      Explanation: Trying to get a 4.0 GPA in all of my classes{' '}
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
                    <b>First Name: John </b>
                  </h5>
                  <h5>
                    <b>Last Name: Doe </b>
                  </h5>
                  <h5>
                    <b>Address: 123456 HelloStreet Blvd. </b>
                  </h5>
                  <h5>
                    <b>Parent Apartment Number: N/A </b>
                  </h5>
                  <h5>
                    <b>City: Milwaukee </b>
                  </h5>
                  <h5>
                    <b>State: Wisconsin </b>
                  </h5>
                  <h5>
                    <b>Zip Code: 12345 </b>
                  </h5>
                  <h5>
                    <b>Home Phone: 123-456-7890 </b>
                  </h5>
                  <h5>
                    <b>Cell Phone: 234-567-8901 </b>
                  </h5>
                  <h5>
                    <b>Parent Email: hellome@gmail.com </b>
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
                    <b>Student Signature: Aaditya Tiwari</b>
                  </h5>
                  <h5>
                    <b>Date Signed: 2/1/22 </b>
                  </h5>
                  <h5>
                    <b>Parent Signature: Someone Tiwari </b>
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
    </ThemeProvider>
  );
}
