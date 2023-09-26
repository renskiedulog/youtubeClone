export const fetchFromAPI = (url) => {
  const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6b121d300cmsh2977b460e8e7d62p1501d4jsn05c892d7356c',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const results = fetch(`${BASE_URL}/${url}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the response body as JSON
    })
  return results;
};