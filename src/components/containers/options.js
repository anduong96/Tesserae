import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { OptionComponents } from './emailComponents'

const EmailComponent = ({ configurations, key, userSelect }) => (
    <Draggable key={key}>
        <div className="draggable-item">
            <OptionComponents userSelect={userSelect} {...configurations}/>
        </div>
    </Draggable>
)

export class OptionsContainer extends Component {
    state = { userSelect: null }

    onDragStart = ({ payload }) =>
        this.setState({ userSelect: payload ? payload.name : null },
            () => {
                this.props.doChangeDragCursor(true)
            })

    onDragEnd = () =>
        this.setState({ userSelect: null },
            () => this.props.doChangeDragCursor(false))

    render = () => {
        const { components } = this.props
        return (
            <div className={'options-wrapper'} >
                <Container
                    behaviour="copy"
                    shouldAcceptDrop={() => false}
                    getChildPayload={index => components[index]}
                    onDragStart={this.onDragStart}
                    onDragEnd={this.onDragEnd}
                    className={'options-container'}
                >
                    {components.map((configurations, index) =>
                        <EmailComponent configurations={configurations} key={index} {...this.state} />)}
                </Container>
            </div>
        )
    }
}

export default OptionsContainer

