import React, { Component } from 'react'
import { PacmanLoader } from 'react-spinners'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { EmailBuilder } from '../components/builder'
import { onSetCanvas } from '../store/canvasContainer/actions'
import { getFromStorage } from '../components/utils'
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
    componentDidMount = () => getFromStorage({
        target: 'tesseraeCanvas',
        defaultValue: [],
        callback: (res) => this.props.onSetCanvas(res)
    })

    render = () => this.props.canvas ? <EmailBuilder /> : <LoadingSpinner />
}

const mapStateToProps = (state) => ({
    canvas: state.canvasContainer.canvas
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        onSetCanvas
    }, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexPage)
