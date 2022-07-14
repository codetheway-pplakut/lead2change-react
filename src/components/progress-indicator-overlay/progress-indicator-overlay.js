import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

export default function ProgressIndicatorOverlay(props) {
  const { active } = props;

  return (
    <Modal open={active}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <CircularProgress sx={{ color: 'primary.light' }} />
      </Box>
    </Modal>
  );
}

ProgressIndicatorOverlay.propTypes = {
  active: PropTypes.bool,
};

ProgressIndicatorOverlay.defaultProps = {
  active: false,
};
