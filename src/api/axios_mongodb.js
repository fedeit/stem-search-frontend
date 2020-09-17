import axios from 'axios'

const api = axios.create({
    baseURL: 'https://stem-search-server.herokuapp.com/query'
})

// Imports for mongodb query
export const getByKeywords = category => api.get('/keywords?keys=' + category);
export const getById = id => api.get('/activity?id=' + id);
export const getByCategory = id => api.get('/category?id=' + id);
export const deleteById = id => {
	console.log("Delete by id " + id);
	api.delete('/activity?id=' + id, {id: id});
};
export const createNew = data => {
	var params = new URLSearchParams();
	params.append('data', data);
	return api.put('/activity', params);
}
export const updateById = data => {
	var params = new URLSearchParams();
	params.append('data', data);
	return api.post('/activity', params);
}
export const getAll = () => api.get('/allActivities')