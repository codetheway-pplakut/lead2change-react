import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function Validation(props) {
  const { firstName } = props;

  if (firstName.length > 2) {
    return <Typography>Test</Typography>;
  }
}

Validation.propTypes = {
  firstName: PropTypes.string.isRequired,
};
