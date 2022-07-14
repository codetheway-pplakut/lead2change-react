import Menu from '@mui/icons-material/Menu';
import MaterialAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function AppBar(props) {
  const { onMenuClick, title } = props;

  return (
    <MaterialAppBar>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          size="large"
          sx={{ mr: 1 }}
        >
          <Menu />
        </IconButton>
        {title && <Typography variant="h6">{title}</Typography>}
      </Toolbar>
    </MaterialAppBar>
  );
}

AppBar.propTypes = {
  onMenuClick: PropTypes.func,
  title: PropTypes.string,
};

AppBar.defaultProps = {
  onMenuClick: undefined,
  title: '',
};
