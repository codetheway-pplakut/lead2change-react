import JwtDecode from 'jwt-decode';

const isTokenExpired = (token) => {
  if (!token) return true;
  const decodedToken = JwtDecode(token);
  const now = Math.floor(Date.now() / 1000);

  return now > decodedToken?.exp;
};

export default isTokenExpired;
