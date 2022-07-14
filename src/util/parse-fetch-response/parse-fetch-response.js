/**
 * If the response has a text property, parse it as JSON and return it, otherwise
 * return the default response.
 * @param [response] - The response object from the fetch call.
 * @param [defaultResponse] - The default response to return if the response is not
 * valid.
 * @returns a promise that resolves to the parsed response.
 */
export default async function parseFetchResponse(
  response = {},
  defaultResponse = {}
) {
  const { text } = response;

  const responseText = text ? await response.text() : undefined;
  if (responseText) return JSON.parse(responseText);

  return defaultResponse;
}
