export const useFetch = async (url) => {
  const response = await fetch(url);
  const actualData = await response.json();

  return actualData;
};
