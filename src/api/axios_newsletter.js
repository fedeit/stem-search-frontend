import axios from 'axios'

const api = axios.create({
    baseURL: 'https://stem-search-server.herokuapp.com/newsletter'
});

// Imports for mongodb query
export const subscribeNewsletter = email => {
	var params = new URLSearchParams();
	params.append('email', email);
	return api.post('/signup', params);
}
