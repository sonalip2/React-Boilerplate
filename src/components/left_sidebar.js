import React from 'react'
import { Link } from 'react-router-dom'

const LeftSidebar = ({ children }) => {
	return <div className="left-sidebar">
		<Link to="/">Dashboard</Link>
		<Link to="/posts">posts</Link>
		<Link to="/posts/new">Add New Blog</Link>
	</div>
}

export default LeftSidebar
