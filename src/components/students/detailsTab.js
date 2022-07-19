/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

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
  const [disabled, setDisabled] = useState(false);

  function handleGameClick() {
    setDisabled(!disabled);
  }

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
                style={{ height: '70vh' }}
              >
                <GridText>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Post Secondary Plan</b>
                    <button
                      style={{ float: 'right' }}
                      type="submit"
                      onClick={handleGameClick}
                    >
                      {' '}
                      Edit{' '}
                    </button>
                  </h3>
                  <h5>
                    <b>
                      Plans After College:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>I have applied to a college: </b>
                    <TextField
                      className="typing-container"
                      placeholder=" Yes "
                      disabled={!disabled}
                    />
                  </h5>
                  <h5>
                    <b>
                      Colleges I’ve applied to/plan to apply to:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>I have begun my work on my college essay: </b>
                    <TextField
                      className="typing-container"
                      placeholder=" Yes "
                      disabled={!disabled}
                    />
                  </h5>
                  <h5>
                    <b>I need help writing my college essay: </b>
                    <TextField
                      className="typing-container"
                      placeholder=" No "
                      disabled={!disabled}
                    />
                  </h5>
                  <h5>
                    <b>First choice of college: </b>
                    <TextField
                      className="typing-container"
                      placeholder=" Sus "
                      disabled={!disabled}
                    />
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>College Entrance Exam Information: </b>
                  </h3>
                  <h5>
                    <b>
                      PACT Score:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" 35 "
                        disabled={!disabled}
                      />
                      <div>
                        Date of PACT:{' '}
                        <TextField
                          className="typing-container"
                          placeholder=" I want to get job "
                          disabled={!disabled}
                          type="date"
                        />
                      </div>
                    </b>
                  </h5>
                  <h5>
                    <b>
                      PSAT Score:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" 1600 "
                        disabled={!disabled}
                      />
                      <div>
                        {' '}
                        Date of PSAT:{' '}
                        <TextField
                          className="typing-container"
                          placeholder=" I want to get job "
                          disabled={!disabled}
                          type="date"
                        />
                      </div>
                    </b>
                  </h5>
                  <h5>
                    <b>
                      ACT Score:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" 37 "
                        disabled={!disabled}
                      />
                      <div>
                        {' '}
                        Date of ACT:{' '}
                        <TextField
                          className="typing-container"
                          placeholder=" I want to get job "
                          disabled={!disabled}
                          type="date"
                        />
                      </div>
                    </b>
                  </h5>
                  <h5>
                    <b>
                      SAT Score: 1
                      <TextField
                        className="typing-container"
                        placeholder=" 1700 "
                        disabled={!disabled}
                      />
                      <div>
                        {' '}
                        Date of SAT:{' '}
                        <TextField
                          className="typing-container"
                          placeholder=" I want to get job "
                          disabled={!disabled}
                          type="date"
                        />
                      </div>
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Financial Aid:</b>
                  </h3>
                  <h5>
                    <b>
                      I have already completed the financial aid process:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" Yes "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      I need assistance filling out my FAFSA/Financial aid
                      forms:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" Yes "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Support they need:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" Yes "
                        disabled={!disabled}
                      />
                    </b>
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
                    <button
                      style={{ float: 'right' }}
                      type="submit"
                      onClick={handleGameClick}
                    >
                      {' '}
                      Edit{' '}
                    </button>
                  </h3>
                  <h5>
                    <b>
                      Goal:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Goal Set Date:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      SEL:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Goal Review Date:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>Accomplishment State: </b>
                    <p>
                      {' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </p>
                  </h5>
                  <h5>
                    <b>
                      Explanation:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Goal Two</b>
                  </h3>
                  <h5>
                    <b>
                      Goal:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Goal Set Date:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      SEL:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Goal Review Date:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Accomplishment State:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Explanation:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Goal Three</b>
                  </h3>
                  <h5>
                    <b>
                      Goal:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Goal Set Date:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      SEL:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Goal Review Date:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Accomplishment State:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Explanation:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
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
                    <button
                      style={{ float: 'right' }}
                      type="submit"
                      onClick={handleGameClick}
                    >
                      {' '}
                      Edit{' '}
                    </button>
                  </h3>
                  <h5>
                    <b>
                      First Name:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Last Name:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Address:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Parent Apartment Number:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      City:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      State:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Zip Code:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Home Phone:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Cell Phone:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Parent Email:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h3>
                    <b style={{ color: '#2656A5' }}>Guidance Couselor Info: </b>
                  </h3>
                  <h5>
                    <b>
                      I know my guidance counselor:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Admin Details: </b>
                  </h3>
                  <h5>
                    <b>
                      Activity Status:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Acceptance Status:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h3 style={{ color: '#2656A5' }}>
                    <b>Signatures </b>
                  </h3>
                  <h5>
                    <b>
                      Student Signature:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Date Signed:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Parent Signature:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                      />{' '}
                    </b>
                  </h5>
                  <h5>
                    <b>
                      Date Signed:{' '}
                      <TextField
                        className="typing-container"
                        placeholder=" I want to get job "
                        disabled={!disabled}
                        type="date"
                      />{' '}
                    </b>
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
