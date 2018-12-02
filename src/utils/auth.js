const tokenKey = 'token'
const userKey = 'userDetails'

export const doLogin = (data) => {
	const token = data.token
	const user = data.user
	const userData = {
		id: user.id,
	}
	localStorage.setItem(tokenKey, token)
	localStorage.setItem(userKey, JSON.stringify(userData))
}

export const getToken = () => {
	const token = localStorage.getItem(tokenKey)
	return token
}

export const getUserDetails = () => {
	const user = localStorage.getItem(userKey)
	return JSON.parse(user)
}

export const doLogout = () => {
	localStorage.removeItem(tokenKey)
	localStorage.removeItem(userKey)
}
