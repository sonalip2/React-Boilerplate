import React from 'react'
import BlogItem from './item';

const BlogList = ({ posts, navigateToView, loadingMore }) => {
	return (
		<div>
			{posts.map((blog) => (
				<BlogItem blog={blog} navigateToView={navigateToView} key={blog.id} />
			))}
		</div>
	)
}

export default BlogList
