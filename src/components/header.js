import React from 'react'
import { Steps } from 'antd'
import '../css/nav.css'

// Probably going to move this out because I cant passed functions through it
// TODO replace this later
const { Step } = Steps
const Header = ({ siteTitle }) => (
	<div className={'nav-container row'}>
		<div className={'logo col-sm-12 col-md-2'}>
			//TODO Add title
			{/* <img src={fillerSRC} /> */}
			{/* {siteTitle} */}
		</div>
		{/* <div className={'nav buttons col-sm-12 col-md-7'}>
			todo
		</div>
		<div className={'steps-container col-sm-0 col-md-3'}>
			<Steps current={1} size={'small'}>
				{['Select', 'Build', 'Download']
					.map((label, index) => <Step title={label} key={index}/>)
				}
			</Steps>
		</div> */}
	</div>
)

export default Header
