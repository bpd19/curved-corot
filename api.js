const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://shoes-collections.p.rapidapi.com/shoes/3',
  headers: {
    'X-RapidAPI-Key': 'a1d6e7f5cfmshb7a50f3b49a74a4p13d625jsn4c441dc7f20f',
    'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}