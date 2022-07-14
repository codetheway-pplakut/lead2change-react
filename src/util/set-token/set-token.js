import TOKEN_SESSION_STORAGE_KEY from '../../constants/token-session-storage-key';
import isDomAccessible from '../is-dom-accessible/is-dom-accessible';

const setToken = (value) => {
  if (!isDomAccessible()) return;
  sessionStorage.setItem(TOKEN_SESSION_STORAGE_KEY, value);
};

export default setToken;
