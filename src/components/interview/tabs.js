import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InterviewQuestions from './InterviewQuestions';
import GritSliderQuestions from './GritQuestions';
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: '95%',
        height: 500,
        border: 3,
        mx: 'auto',
        borderColor: 'rgba(0, 76, 187, 0)',
      }}
    >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Interview Questions" {...a11yProps(0)} />
          <Tab label="Grit Questions" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            height: 400,
            border: 3,
            overflow: 'auto',
            mx: '5%',
            borderColor: 'rgba(0, 76, 187, 0)',
          }}
        >
          <InterviewQuestions />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            height: 400,
            border: 3,
            overflow: 'auto',
            mx: '5%',
            borderColor: 'rgba(0, 76, 187, 0)',
          }}
        >
          <GritSliderQuestions />
        </Box>
      </TabPanel>
    </Box>
  );
}
