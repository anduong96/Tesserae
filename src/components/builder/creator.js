
import React, { Component } from 'react'
import EmailCanvas from '../containers/canvas'
import Editor from '../containers/editor'
import { OptionsContainer } from '../containers/options'

export default class EmailBuilder extends Component {
    state = { isDragging: false }
    onDrag = (isDragging) => this.setState({ isDragging })

    render = () => {
        const { components } = this.props
        const { isDragging } = this.state
        return (
            <div className={'builder-wrapper'} >
                <OptionsContainer components={components} doChangeDragCursor={this.onDrag}/>
                <EmailCanvas {...this.props} isDragging={isDragging}/>
                <Editor {...this.props} />
            </div>
        )
    }
}
