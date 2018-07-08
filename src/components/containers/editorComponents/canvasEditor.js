import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Collapse } from 'antd'
import { PanelHeader } from './panelHeader'
import { SettingFooter } from './settingFooter'
import { ComponentSettings } from './componentSettings'
import { GeneralSettings } from './generalSettings'
import {
    onAddToCanvas,
    onRemoveFromCanvas,
    onCloneFromCanvas,
    onChangeComponentConfig,
    onFocusOnCanvasComponent,
    onChangeCanvasStyle
} from '../../../store/canvasContainer/actions'

export class CanvasEditor extends Component {
    onRenderCanvasSettings = () => this.props.canvas.map((item, index) => (
        <Collapse.Panel header={ <PanelHeader title={item.name} index={index +1} /> } key={item.id}>
            <ComponentSettings config={item} onConfigChange={this.props.onChangeComponentConfig} />
            <SettingFooter
                onClone={() => this.props.onRemoveFromCanvas(item.id)}
                onRemove={ () =>this.props.onCloneFromCanvas(item.id)}
            />
        </Collapse.Panel>
    ))

    render = () => (
        <Collapse bordered={false} defaultActiveKey={['general-settings']}>
            <Collapse.Panel header={'Container'} key={'general-settings'}>
                <GeneralSettings { ...this.props } />
            </Collapse.Panel>
            {this.onRenderCanvasSettings()}
        </Collapse>
    )
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
        onFocusOnCanvasComponent,
        onChangeCanvasStyle
    }, dispatch),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CanvasEditor)
