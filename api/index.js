import axios from 'axios'
const instance = axios.create({
	baseURL: 'https://6684d16356e7503d1ae140ec.mockapi.io',
})
instance.interceptors.request.use(config => {
	const user = JSON.parse(localStorage.getItem('user'))
	if (user) {
		config.headers['Authorization'] = `Bearer ${user.token}`
	}
	return config
})
instance.interceptors.response.use(
	response => response,
	error => {
		console.log('error', error)
	}
)
export default instance
