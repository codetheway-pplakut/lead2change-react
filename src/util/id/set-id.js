import ID_SESSION_STORAGE_KEY from '../../constants/id';
import isDomAccessible from '../is-dom-accessible/is-dom-accessible';

const setID = (value) => {
  if (!isDomAccessible()) return;
  sessionStorage.setItem(ID_SESSION_STORAGE_KEY, value);
};

export default setID;
