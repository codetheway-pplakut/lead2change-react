/**
 * This is a mock function that should not be used in production code.
 *
 * This function is used to simulate requests during development if a developer
 * wants to mock an API.
 *
 * It returns a promise that resolves to a JSON string of the returnValue argument
 * after a delay of delay milliseconds
 * @returns A promise that resolves to a stringified version of the returnValue
 * argument.
 */
export default function mockAsyncRequest({
  returnValue,
  delay = 3000,
  error = false,
}) {
  const request = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(returnValue);
      } else {
        resolve(returnValue);
      }
    }, delay);
  });

  return request;
}
