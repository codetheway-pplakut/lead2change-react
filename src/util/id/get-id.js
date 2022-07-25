import ID_SESSION_STORAGE_KEY from '../../constants/id';
import isDomAccessible from '../is-dom-accessible/is-dom-accessible';

const getID = () => {
  if (!isDomAccessible()) return;
  return sessionStorage.getItem(ID_SESSION_STORAGE_KEY);
};

export default getID;
