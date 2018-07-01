import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'

import { Bootstrap4 } from '../components/bootstrap'
import Header from '../components/header'
import rootReducer from '../store/rootReducer'

import '../css/app.css'
import 'antd/dist/antd.css'

const meta = [
	{ name: 'description', content: 'Sample' },
	{ name: 'keywords', content: 'sample, something' },
]

const logger = createLogger({
	duration: true,
	timestamp: false,
	diff: true
})

const store = createStore(
	rootReducer,
	applyMiddleware(logger)
)

const Layout = ({ children, data }) => (
	<div className={'app-main'}>
		<Helmet title={data.site.siteMetadata.title} meta={meta} />
		<Bootstrap4 enable />
		<div className='app-body' >
			<Provider store={store} >
				{children()}
			</Provider>
		</div>
	</div>
)

Layout.propTypes = {
  	children: PropTypes.func
}

export default Layout

export const query = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`
