import React, { Component } from 'react'
import { Collapse, Button } from 'antd'
import { PanelHeader } from './editorComponents/panelHeader'
import { GeneralSettings } from '../containers/editorComponents/generalSettings'
import { NoSettings } from '../containers/editorComponents/noSettings'
import { ImageSettings } from '../containers/editorComponents/imageSettings'
import TitleSettings from '../containers/editorComponents/titleSettings'

export default class Editor extends Component {
    onUserHoverOverHeader = (id, stillHovering) => this.setState({ currentHover: ( stillHovering ? id : null ) })

    onRenderCanvasSettings = () => this.props.canvas.map((item, index) => (
        <Collapse.Panel header={ <PanelHeader title={item.name} index={index +1}/> } key={item.id}>
            {{
                image: <ImageSettings {...item} onConfigChange={this.props.onChangeComponentConfig} />,
                divider: <NoSettings />,
                text: <NoSettings />,
                blank: <NoSettings />,
                title: <TitleSettings {...item} onConfigChange={this.props.onChangeComponentConfig}/>,
                button: <NoSettings />,
                location: <NoSettings />,
                imageTextLeft: <NoSettings />,
                imageTextRight: <NoSettings />,
                doubleImageText: <NoSettings />,
                tripleImageText: <NoSettings />
            }[item.name]}
            <Button.Group className={'editor-footer-btn-container'} >
                <Button
                    className={'editor-footer-clone-btn'}
                    onClick={() => this.props.onClone(item.id)}
                >
                    Clone
                </Button>
                <Button
                    className={'editor-footer-remove-btn'}
                    onClick={() => this.props.onRemove(item.id)}
                >
                    Remove
                </Button>
            </Button.Group>
        </Collapse.Panel>
    ))

    render = () => {
        const { componentSelected, canvas, onChangeCanvasStyle, canvasStyle } = this.props
        return (
            <div className={'editor-wrapper'} >
                <Collapse bordered={false} defaultActiveKey={['general-settings']}>
                    <Collapse.Panel header={'Container'} key={'general-settings'}>
                        <GeneralSettings {...{ canvasStyle, onChangeCanvasStyle }} />
                    </Collapse.Panel>
                    {this.onRenderCanvasSettings()}
                </Collapse>
            </div>
        )
    }
}

