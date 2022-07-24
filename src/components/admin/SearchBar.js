import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

export default function SearchBar() {
  return (
    <TextField
      placeholder="Filter..."
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
    />
  );
}
