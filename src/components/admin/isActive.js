import Box from '@mui/material/Box';
import GetName from '../../util/name/get-name';
import Delete from './deleteAdminModal';

export default function isActive(props) {

  if (props.admin.email === GetName()) {
    return <Box sx={{ width: 40, height: 40}}/>;
  }
  return <Delete id={props.admin.id} />;
}
