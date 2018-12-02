import { doLogout } from "./auth";

export default (url, options) => new Promise(async (resolve, reject) => {
	try {
		const response = await fetch(url, options)
		const data = await response.json();
		if (response.status >= 200 && response.status < 400) {
			return resolve(data)
		}

		if (response.status === 403) {
			await doLogout()
			return reject(data)
		}

		return reject(data)
	} catch (e) {
		return reject(e)
	}
})
