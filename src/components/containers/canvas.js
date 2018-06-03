import React, { Component } from 'react'
import { Container, Draggable } from 'react-smooth-dnd'
import { Radio, Icon } from 'antd'
import { CanvasComponents } from './emailComponents'

const DesktopViewButton = (settings) => (
    <Radio.Button value={'desktop'} {...settings}>
        <Icon type={'laptop'} />
    </Radio.Button>
)

const MobileViewButton = (settings) => (
    <Radio.Button value={'mobile'} {...settings}>
        <Icon type={'mobile'} />
    </Radio.Button>
)

const getCanvas = () => document.getElementsByClassName('canvas-wrapper')[0].children[1]
const canvasIsHungry = () => getCanvas().childElementCount === 0
const showCanvasHunger = () => getCanvas().classList.add('canvas-is-hungry')
const showCanvasIsNotHungry = () => getCanvas().classList.remove('canvas-is-hungry')
const handleCanvasHunger = () => {
    if (canvasIsHungry()) showCanvasHunger()
    else showCanvasIsNotHungry()
}

export default class EmailCanvas extends Component {
    state = {
        view: 'desktop',
        currentHover: null
    }

    componentDidMount = () => handleCanvasHunger()
    componentDidUpdate = () => handleCanvasHunger()

    onChangeView = ({ target }) => this.setState({ view: target.value })
    onSetCurrentHover = (isHovering, id) => this.setState({ currentHover: isHovering? id : null })
    onGenerateCanvasItems = (configurations, index) => (
        <Draggable key={index}>
            <CanvasComponents
                onFocus={this.props.onComponentFocus}
                onSetCurrentHover={this.onSetCurrentHover}
                onRemove={this.props.onRemove}
                onClone={this.props.onClone}
                currentHover={this.state.currentHover}
                configurations={configurations}
                index={index}
            />
        </Draggable>
    )

    render = () => {
        const { canvas, isDragging, onDrop } = this.props
        const { view } = this.state
        return (
            <div className={`canvas-wrapper${isDragging ? ' is-dragging':''}`} >
                <Radio.Group className={'view-radio-button'} defaultValue={view} onChange={this.onChangeView}>
                    <DesktopViewButton onClick={() => console.log(this.props)} />
                    <MobileViewButton />
                </Radio.Group>
                <Container
                    orientation={'vertical'}
                    dropClass="opacity-ghost-drop"
                    shouldAcceptDrop={() => true}
                    getChildPayload={(index) =>  canvas[index]}
                    onDrop={onDrop}
                    lockAxis={'y'}
                >
                    { canvas.map(this.onGenerateCanvasItems)}
                </Container>
            </div>
        )
    }
}
