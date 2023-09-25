// import axios from 'axios'

// const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

// const options = {
//     params: {
//         maxResults: '50'
//     },
//     headers: {
//         'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
//         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//     }
// };

// export const fetchFromAPI = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// };

const url = 'https://youtube-v31.p.rapidapi.com';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6b121d300cmsh2977b460e8e7d62p1501d4jsn05c892d7356c',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async () => fetch(url, options)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        console.log(response.json)
        return response.json(); // Parse the response body as JSON
    })
    .then(data => {
        // Handle the JSON data here
        console.log(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Fetch error:', error);
    });

// export const fetchFromAPI = async (url) => {
//     const { data } = await fetch(`${BASE_URL}/${url}`, options)
//         .then(response => {
//             console.log(response)
//             return response.json();
//         })
// };