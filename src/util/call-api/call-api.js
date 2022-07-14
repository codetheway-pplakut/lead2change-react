import getToken from '../get-token/get-token';
import handleFetchResponse from '../handle-fetch-response/handle-fetch-response';

/**
 * It takes an object with some optional parameters, and returns a promise that
 * resolves to the response from the API
 * @param [] - authenticated - whether or not the request is authenticated.
 * @returns A function that takes an object as an argument.
 */
const callApi = async ({
  authenticated = true,
  body,
  config = {},
  endpoint = '',
  method = 'GET',
} = {}) => {
  if (!endpoint) return;

  const resource = `${window.ENV_CONFIG.API}/${endpoint}`;

  const headers = { 'Content-Type': 'application/json', ...config.headers };
  if (authenticated) {
    const token = getToken();
    headers.Authorization = token;
  }

  const init = {
    body: JSON.stringify(body),
    headers,
    method,
    ...config,
  };

  const result = await fetch(resource, init);
  return handleFetchResponse(result);
};

export default callApi;
