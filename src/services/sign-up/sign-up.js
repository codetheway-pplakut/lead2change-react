import mockAsyncRequest from '../../util/mock-async-request/mock-async-request';
// import parseFetchResponse from '../../util/parse-fetch-response/parse-fetch-response';

export default async function signUp(user) {
  // const response = fetch('/sign-up', { method: 'get' });
  // return parseFetchResponse(response);
  const response = await mockAsyncRequest({ returnValue: user });
  return response;
}
