import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Bootstrap4 } from '../components/bootstrap'
import Header from '../components/header'
import '../css/app.css'
import 'antd/dist/antd.css'

const meta = [
	{ name: 'description', content: 'Sample' },
	{ name: 'keywords', content: 'sample, something' },
]


const Layout = ({ children, data }) => (
	<div className={'app-main'}>
		<Helmet title={data.site.siteMetadata.title} meta={meta} />
		<Header siteTitle={data.site.siteMetadata.title} />
		<Bootstrap4 enable/>
		<div className='app-body'>{children()}</div>
	</div>
)

Layout.propTypes = {
  	children: PropTypes.func,
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
