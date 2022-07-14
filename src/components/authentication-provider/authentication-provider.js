import { useEffect, useState } from 'react';
import CHILDREN_PROP_TYPE from '../../constants/children-prop-type';
import AuthenticationContext from '../../context/authentication/authentication';
import { authenticateUser } from '../../services/users/users';
import getToken from '../../util/get-token/get-token';
import setToken from '../../util/set-token/set-token';
import isTokenExpired from '../../util/is-token-expired/is-token-expired';

function AuthenticationProvider(props) {
  const { children } = props;
  const [authenticated, setAuthenticated] = useState(false);

  // First we check to see if a token is in session storage, if there is a token
  // we check to see if it's expired.  If it is not expired, we let the user
  // bypass login.
  useEffect(() => {
    const token = getToken();
    if (token) {
      const isExpired = isTokenExpired(token);
      if (isExpired) {
        setAuthenticated(false);
      } else {
        setAuthenticated(true);
      }
    }
  }, []);

  async function login({ username, password }) {
    const response = await authenticateUser({ username, password });

    setAuthenticated(true);
    setToken(response.token);

    return response;
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { login, authenticated };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

AuthenticationProvider.propTypes = {
  children: CHILDREN_PROP_TYPE,
};

AuthenticationProvider.defaultProps = {
  children: null,
};

export default AuthenticationProvider;
