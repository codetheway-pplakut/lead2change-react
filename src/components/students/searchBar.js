import PropTypes from 'prop-types';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchBar(props) {
  const { setSearch } = props;
  return (
    <TextField
      label="Search"
      id="outlined-end-adornment"
      sx={{ m: 1, width: '25ch' }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      fullWidth
      size="small"
      onChange={(event) => setSearch(event.target.value)}
    />
  );
}

SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
};
