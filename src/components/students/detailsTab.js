/* eslint-disable no-restricted-globals */
/* eslint-disable react/require-default-props */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import ROUTES from '../../constants/routes';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

function SignUpDisplay(props) {
  const { onEditClick } = props;
  const [value, setValue] = React.useState(0);

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
                  <Button
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </Button>
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
                  <Button
                    style={{ float: 'right' }}
                    variant="contained"
                    onClick={onEditClick}
                  >
                    Edit
                  </Button>
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
                    onChange={event => setFirst(event.target.value)}
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
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                </Grid>
                <Grid>
                  <TextField
                    size="small"
                    className="typing-container"
                    defaultValue="Northwestern"
                    label="College First Choice"
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                </Grid>
                <Grid marginTop={1}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Have Applied To College
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Started College Essay
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Need Help With College Essay
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
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
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                  <TextField
                    size="small"
                    className="typing-container"
                    label="PSAT Date"
                    type="date"
                    onChange={event => setFirst(event.target.value)}
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
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                  <TextField
                    size="small"
                    className="typing-container"
                    label="PSAT Date"
                    type="date"
                    onChange={event => setFirst(event.target.value)}
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
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                  <TextField
                    size="small"
                    className="typing-container"
                    label="ACT Date"
                    type="date"
                    onChange={event => setFirst(event.target.value)}
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
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                  <TextField
                    size="small"
                    className="typing-container"
                    label="SAT Date"
                    type="date"
                    onChange={event => setFirst(event.target.value)}
                    required
                  />
                </Grid>
                <h3 style={{ color: '#2656A5' }}>Financial Aid:</h3>
                <Grid>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Completed Finacial Aid Process
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Need Help With FAFSA
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={20}
                    >
                      <MenuItem value=""></MenuItem>
                      <MenuItem value={10}>Yes</MenuItem>
                      <MenuItem value={20}>No</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid marginBottom={2}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Support Needed
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
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
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      label="Set Date"
                      type="date"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="Responsible-Decision Making"
                      label="SEL"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      type="date"
                      label="Review Date"
                      onChange={event => setFirst(event.target.value)}
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
                        <MenuItem value=""></MenuItem>
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
                      onChange={event => setFirst(event.target.value)}
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
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      label="Set Date"
                      type="date"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="Responsible-Decision Making"
                      label="SEL"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      type="date"
                      label="Review Date"
                      onChange={event => setFirst(event.target.value)}
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
                        <MenuItem value=""></MenuItem>
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
                      onChange={event => setFirst(event.target.value)}
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
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      label="Set Date"
                      type="date"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="Responsible-Decision Making"
                      label="SEL"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      type="date"
                      label="Review Date"
                      onChange={event => setFirst(event.target.value)}
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
                        <MenuItem value=""></MenuItem>
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
                      onChange={event => setFirst(event.target.value)}
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
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>

                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="12345 demo street"
                      label="Adress"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="40"
                      label="Apt. #"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="Milwaukee"
                      label="City"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="WI"
                      label="State"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="50021"
                      label="Zip Code"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="312-315-5646"
                      label="Home Phone"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="314-654-7821"
                      label="Cell Phone"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="mdijd@gmail.com"
                      label="Email"
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <h3 style={{ color: '#2656A5' }}>Guidance Couselor Info:</h3>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Knows Guidance Cousoler{' '}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
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
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={10}>Active</MenuItem>
                        <MenuItem value={20}>Inactive</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Acceptance Status{' '}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-standard-label"
                      id="demo-simple-select-standard"
                      label="Age"
                      defaultValue={10}
                    >
                      <MenuItem value=""></MenuItem>
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
                         
                
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      label="Date Signed"
                      type="date"
                         
              
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>

                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      defaultValue="John Tiwair"
                      label="Parent Signiture"
                         
                  
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                  <Grid marginBottom={2}>
                    <TextField
                      size="small"
                      className="typing-container"
                      label="Date Signed"
                      type="date"
                   
                  
                   
                  
                      onChange={event => setFirst(event.target.value)}
                      required
                    />
                  </Grid>
                </GridText>
              </Grid>
            </Grid>
          </Box>
        </TabPanel>
        <Grid align="center">

         
          <Button variant="contained"  type="Submit">
            Save
          </Button>{'   '}
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

  const onSaveClick = event => {
    saveStudentInfo();
    endEditing();
    event.preventDefault();

    console.log('form submitted ✅');
  };

  const onCancelClick = () => {
    cancelStudentInfo();
    cancelEditing();
  };

  const num = 0;
  const onBackClick = () => {
    navigate(ROUTES.STUDENT_TEST);
  };
  const navigate = useNavigate();
  const buttonText = '< Back to table';




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
