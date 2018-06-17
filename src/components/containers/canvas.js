import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Container, Draggable } from 'react-smooth-dnd'
import { CanvasComponents } from './emailComponents'
import {
    onAddToCanvas,
    onRemoveFromCanvas,
    onCloneFromCanvas,
    onChangeComponentConfig,
    onFocusOnCanvasComponent
} from '../../store/canvasContainer/actions'

// This is to handle if item is inside canvas or not
const getCanvas = () => document.getElementsByClassName('canvas-wrapper')[0].children[0]
const canvasIsHungry = () => getCanvas().childElementCount === 0
const showCanvasHunger = () => getCanvas().classList.add('canvas-is-hungry')
const showCanvasIsNotHungry = () => getCanvas().classList.remove('canvas-is-hungry')
const handleCanvasHunger = () => canvasIsHungry() ? showCanvasHunger() : showCanvasIsNotHungry()

export class EmailCanvas extends Component {
    componentDidMount = () => handleCanvasHunger()
    componentDidUpdate = () => handleCanvasHunger()
    onGenerateCanvasItems = (configurations, index) => (
        <Draggable key={index}>
            <CanvasComponents
                onFocus={this.props.onComponentFocus}
                onSetCurrentHover={this.props.onFocusOnCanvasComponent}
                onRemove={this.props.onRemoveFromCanvas}
                onClone={this.props.onCloneFromCanvas}
                currentHover={this.props.canvasContainer.isHoveringOver}
                configurations={configurations}
                index={index}
            />
        </Draggable>
    )

    render = () => {
        const { canvasContainer, isDragging, onAddToCanvas } = this.props
        const { canvas, canvasStyle } = canvasContainer
        const canvasIsWhite =
            canvasStyle.backgroundColor
            && '#ffffff' === canvasStyle
                .backgroundColor
                .toLowerCase()

        const darkStyle = {
            ...canvasStyle,
            borderColor: 'gray',
            borderStyle: 'solid',
            borderWidth: 1
        }

        return (
            <div className={`canvas-wrapper${isDragging ? ' is-dragging':''}`} style={canvasIsWhite ? darkStyle : canvasStyle}>
                <Container
                    orientation={'vertical'}
                    dropClass="opacity-ghost-drop"
                    shouldAcceptDrop={() => true}
                    getChildPayload={(index) =>  canvas[index]}
                    onDrop={(dropItem) => onAddToCanvas(dropItem)}
                    lockAxis={'y'}
                >
                    { canvas.map(this.onGenerateCanvasItems)}
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    isDragging: state.optionsContainer.isDragging,
    canvasContainer: state.canvasContainer
})

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        onAddToCanvas,
        onRemoveFromCanvas,
        onCloneFromCanvas,
        onChangeComponentConfig,
        onFocusOnCanvasComponent
    }, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailCanvas)
