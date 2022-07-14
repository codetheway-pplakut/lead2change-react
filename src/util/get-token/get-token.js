import TOKEN_SESSION_STORAGE_KEY from '../../constants/token-session-storage-key';
import isDomAccessible from '../is-dom-accessible/is-dom-accessible';

const getToken = () => {
  if (!isDomAccessible()) return;
  sessionStorage.getItem(TOKEN_SESSION_STORAGE_KEY);
};

export default getToken;
