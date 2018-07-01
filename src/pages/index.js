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
	componentDidMount = () => {
		let canvas = []
		if ( typeof window !== 'undefined' ) {
			const canvasInStorage = window.localStorage.getItem('tesseraeCanvas');
			if (canvasInStorage) {
				canvas = JSON.parse(canvasInStorage)
			} else {
				window.localStorage.setItem('tesseraeCanvas', JSON.stringify([]))
				canvas = []
			}
		}

		this.props.onSetCanvas(canvas)
	}

	render = () => (
		<div>
			{ !this.props.canvas && <LoadingSpinner /> }
			{ this.props.canvas && <EmailBuilder/> }
		</div>
	)
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
