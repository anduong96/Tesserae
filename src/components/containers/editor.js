import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collapse, Button } from 'antd'
import { PanelHeader } from './editorComponents/panelHeader'
import { GeneralSettings } from '../containers/editorComponents/generalSettings'
import { NoSettings } from '../containers/editorComponents/noSettings'
import { ImageSettings } from '../containers/editorComponents/imageSettings'
import TitleSettings from '../containers/editorComponents/titleSettings'
import ExportSettings from '../containers/editorComponents/exportSettings'
import {
    onAddToCanvas,
    onRemoveFromCanvas,
    onCloneFromCanvas,
    onChangeComponentConfig,
    onFocusOnCanvasComponent
} from '../../store/canvasContainer/actions'

export class Editor extends Component {
    onRenderCanvasSettings = () => this.props.canvas.map((item, index) => (
        <Collapse.Panel header={ <PanelHeader title={item.name} index={index +1} /> } key={item.id}>
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
                <Button className={'editor-footer-clone-btn'} onClick={() => this.props.onCloneFromCanvas(item.id)}>
                    Clone
                </Button>
                <Button className={'editor-footer-remove-btn'} onClick={() => this.props.onRemoveFromCanvas(item.id)}>
                    Remove
                </Button>
            </Button.Group>
        </Collapse.Panel>
    ))

    render = () => {
        const { onChangeCanvasStyle, canvasStyle } = this.props
        const generalSettingsConfig = { canvasStyle, onChangeCanvasStyle }
        return (
            <div className={'editor-wrapper'} >
                <Collapse bordered={false} defaultActiveKey={['general-settings']}>
                    <Collapse.Panel header={'Main'} key={'export-settings'}>
                        <ExportSettings />
                    </Collapse.Panel>
                    <Collapse.Panel header={'Container'} key={'general-settings'}>
                        <GeneralSettings {...generalSettingsConfig} />
                    </Collapse.Panel>
                    {this.onRenderCanvasSettings()}
                </Collapse>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isDragging: state.optionsContainer.isDragging,
    ...state.canvasContainer
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
)(Editor)
