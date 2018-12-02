import request from './request'
import apis from '../config/apis'
import { doLogin, getToken } from './auth'

const jsonHeader = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
}

const formHeader = {
}

export const login = (payload) => new Promise(async (resolve, reject) => {
	try {
		const data = await request(apis.auth.login, {
			method: 'POST',
			headers: jsonHeader,
			body: JSON.stringify(payload),
		})
		doLogin(data)
		return resolve(data)
	} catch (e) {
		return reject(e)
	}
})

//this example is for multipart/form-data upload which is used for image upload
export const addBlog = (payload) => new Promise(async (resolve, reject) => {
	const token = getToken()

	const formData = new FormData()
	formData.append('title', payload.title)
	payload.recommend_to && formData.append('assignees', JSON.stringify(payload.recommend_to))
	payload.description && formData.append('description', payload.description)
	//upload image if provide -simple file object use to upload image
	payload.image && formData.append('image', payload.image)

	try {
		const data = await request(apis.blog.add, {
			method: 'POST',
			headers: { ...formHeader, 'Authorization': token },
			body: formData,
		})
		return resolve(data)
	} catch (e) {
		return reject(e)
	}
})

//basic post request
export const updateBlog = (payload, id) => new Promise(async (resolve, reject) => {
	const token = getToken()

	try {
		const data = await request(`${apis.blog.add}/${id}`, {
			method: 'PUT',
			headers: { ...jsonHeader, 'Authorization': token },
			body: JSON.stringify(payload),
		})
		return resolve(data)
	} catch (e) {
		console.log('e', e)
		return reject(e)
	}
})

export const getBlogs = (page) => new Promise(async (resolve) => {
	const token = getToken()
	try {
		const data = await request(`${apis.blog.getAll}?page=${page}`, {
			method: 'GET',
			headers: { ...jsonHeader, 'Authorization': token },
		})
		return resolve(data)
	} catch (e) {
		return resolve([])
	}
})

export const getBlog = (id) => new Promise(async (resolve, reject) => {
	const token = getToken()
	try {
		const data = await request(`${apis.blog.getAll}/${id}`, {
			method: 'GET',
			headers: { ...jsonHeader, 'Authorization': token },
		})
		return resolve(data)
	} catch (e) {
		return reject(e)
	}
})
