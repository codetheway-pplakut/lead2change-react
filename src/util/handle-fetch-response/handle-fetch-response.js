const handleFetchResponse = async (response) => {
  if (!response) return {};

  const { ok, text } = response;
  if (!ok) throw response;

  const responseText = text ? await response.text() : '';
  if (responseText) return JSON.parse(responseText);
};

export default handleFetchResponse;
