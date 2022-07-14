import { useState } from 'react';
import CHILDREN_PROP_TYPE from '../../constants/children-prop-type';
import AuthenticationContext from '../../context/authentication/authentication';
import { authenticateUser } from '../../services/users/users';
import setToken from '../../util/set-token/set-token';

function AuthenticationProvider(props) {
  const { children } = props;
  const [authenticated, setAuthenticated] = useState(false);

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
