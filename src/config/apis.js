const URL = 'http://jsonplaceholder.typicode.com'
const VERSION = '/api/v1'
const ADMIN = '/admin'

export default {
	auth: {
		login: `${URL}/login`,
	},
	blog: {
		getAll: `${URL}/posts`,
		add: `${URL}/posts`,
		edit: `${URL}/posts`,
	},
}
