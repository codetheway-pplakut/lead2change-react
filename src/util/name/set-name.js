import NAME_SESSION_STORAGE_KEY from '../../constants/name';
import isDomAccessible from '../is-dom-accessible/is-dom-accessible';

const setName = (value) => {
  if (!isDomAccessible()) return;
  sessionStorage.setItem(NAME_SESSION_STORAGE_KEY, value);
};

export default setName;
