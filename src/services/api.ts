import axios from 'axios';

const api = axios.create({
	baseURL: 'http://mybaseurl.domain',
});

export default api;
