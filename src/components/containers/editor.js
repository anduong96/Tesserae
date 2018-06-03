import React, { Component } from 'react'
import { Collapse, Button } from 'antd'
import { PanelHeader } from './editorComponents/panelHeader'

export default class Editor extends Component {
    onUserHoverOverHeader = (id, stillHovering) => this.setState({ currentHover: ( stillHovering ? id : null ) })
    // onRemoveCanvasComponnent = (id) => this.props.onRemove(id)
    onRemoveCanvasComponnent = (id) => {
        const closeBtn = document.getElementsByClassName("panel-header-close-btn")
        console.log(closeBtn)
        console.log({id})
    }

    onRenderCanvasSettings = () => this.props.canvas.map((item) => (
        <Collapse.Panel header={ <PanelHeader title={item.name} />} key={item.id}>
                {item.id}
                {JSON.stringify(item.config)}
        </Collapse.Panel>
    ))

    render = () => {
        const { componentSelected, canvas } = this.props
        return (
            <div className={'editor-wrapper'} >
                <Collapse bordered={false} defaultActiveKey={['general-settings']}>
                    <Collapse.Panel header={'General Settings'} key={'general-settings'}>
                        item
                    </Collapse.Panel>
                    {this.onRenderCanvasSettings()}
                </Collapse>
            </div>
        )
    }
}

