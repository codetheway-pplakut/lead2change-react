import handleFetchResponse from '../handle-fetch-response/handle-fetch-response';

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
    const token = ''; // TODO, get token
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
