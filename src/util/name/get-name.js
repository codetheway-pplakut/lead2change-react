import NAME_SESSION_STORAGE_KEY from '../../constants/name';
import isDomAccessible from '../is-dom-accessible/is-dom-accessible';

const getName = () => {
  if (!isDomAccessible()) return;
  return sessionStorage.getItem(NAME_SESSION_STORAGE_KEY);
};

export default getName;
