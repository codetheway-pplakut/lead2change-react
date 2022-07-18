/* eslint-disable prettier/prettier */
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import PropTypes from 'prop-types';

export default function SearchBar(props) {
    const {
        setSearch,
    } = props;
    return(
        <TextField
            label="Search"
            id="outlined-end-adornment"
            sx={{ m: 1, width: '25ch' }}
            InputProps={{
                endAdornment: <InputAdornment position="end">
                                <SearchIcon/>
                              </InputAdornment>,
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