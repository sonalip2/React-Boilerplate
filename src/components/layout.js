import React from 'react'
import Header from './header';
import LeftSidebar from './left_sidebar';
import Footer from './footer';
import Container from './container';

const Layout = ({ children }) => {
	return <div className="app">
		<Header />
		<Container>
			<LeftSidebar />
			<div className="container">
				{children}
			</div>
		</Container>
		<Footer />
	</div>
}

export default Layout
