import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
  const searchBarPosition = {
    marginBottom: '1%',
    display: 'flex',
    alignItems: 'right',
    width: '15%',
    marginLeft: '60%',
    bgcolor: '#F5F5F5',
    marginTop: '1%',
  };
  const inputBaseStyle = {
    ml: 1,
    flex: 1,
  };
  const dividerStyle = {
    height: 28,
    m: 0.5,
  };
  const buttonStyle = {
    p: '10px',
  };
  return (
    <Paper component="form" sx={searchBarPosition}>
      <InputBase sx={inputBaseStyle} placeholder="Filter..." />
      <Divider sx={dividerStyle} orientation="vertical" />
      <IconButton sx={buttonStyle} color="primary">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
