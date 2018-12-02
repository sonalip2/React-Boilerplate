import React from 'react'

const Input = (props) => {
	return (
		<input {...props} className={`${props.className} ${props.error ? 'error' : ''}`} />
	)
}

export default Input
