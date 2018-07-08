import React, { Component } from 'react';
import { Card, Icon, Button } from 'antd'
import html2canvas from 'html2canvas'
import {
    generateID,
    findTagFromDomNode,
    loadImgAsBase64
} from '../../utils'


const AddBtn = ({ onClick }) => (
    <div className={'canvas-select-add-container'}>
        <Button shape={'circle'} icon={'plus'} size={'large'} type={'dash'} onClick={onClick}/>
    </div>
)

class CanvasSelect extends Component {
    state = {
        test: [],
        active: ''
    }

    onRenderCardSettings = (config) => ([
        <Icon type={'delete'} onClick={() => this.onRemove(config.title)} />,
        <Icon type={'copy'} />,
        <Icon type={'setting'} />
    ])

    //TODO screenshoting DOM is not working properly
    onAdd = (config) => html2canvas(document.querySelector('#canvas-container-wrapper'))
        .then((img) => this.setState({
            test: [
                {
                    title: generateID(),
                    description: generateID(),
                    src: img.toDataURL('image/png')
                },
                ...this.state.test,
            ]
        }, () => this.onSetActive(newItem.title)))

    onRemove = (title) => this.setState({
        test: this.state.test.filter((item) => title !== item.title)
    })

    onSetActive = (title) => this.setState({ active: title })

    render = () => (
        <div className={'canvas-select'} >
            <AddBtn onClick={this.onAdd}/>
            <div className={'canvas-select-asset-container'}>
                { this.state.test.map((item) => (
                    <Card
                        hoverable
                        cover={<img src={item.src} className={'canvas-select-card-img'}/>}
                        className={`canvas-select-card ${item.title === this.state.active ? ' active' : ''}`}
                        actions={this.onRenderCardSettings(item)}
                        onClick={() => this.onSetActive(item.title)}
                    >
                        <Card.Meta {...item} />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CanvasSelect;
