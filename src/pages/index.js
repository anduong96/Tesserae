import React, { Component } from 'react'
import window from 'global'
import { PacmanLoader } from 'react-spinners'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EmailBuilder } from '../components/builder'
import { onSetCanvas } from '../store/canvasContainer/actions'
import '../css/builder.css'
import '../css/container.css'
import '../css/icons.css'
import '../css/canvas.css'
import '../css/editor.css'

const LoadingSpinner = () => (
	<div className={'overlay-spinner'}>
		<PacmanLoader color={'#c141f4'} loading />
	</div>
)

export class IndexPage extends Component {
	componentDidMount = () => this.props.onSetCanvas(
		typeof window !== 'undefined'
		? JSON.parse(window.localStorage.getItem('tesseraeCanvas'))
		: [])

	render = () =>  this.props.canvas ? <EmailBuilder/> : <LoadingSpinner />
}

const mapStateToProps = (state) => {
	return {
		canvas: state.canvasContainer.canvas
	}
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        onSetCanvas
    }, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(IndexPage)
