import { purple } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#004cbb',
  '&:hover': {
    backgroundColor: '#1F365E',
  },
}));

export default ColorButton;
