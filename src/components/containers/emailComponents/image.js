import React, { Component } from 'react'
import imageSVG from '../../../img/icons/image.svg'
import { mjmlTemplate, MJML } from '../../../mjmlEngine/mjmlBasics'
import { objectDasherization, loadImgAsBase64 } from '../../utils'

export const ImageIcon = () => (
    <div className={'email-component image'}>
         <img src={imageSVG} className={'image-icon'} />
    </div>
)

export const Image = ({ onSetCurrentHover,config, id }) => (
    <div
        className={'canvas-component image'}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <IMG {...config} />
    </div>
)

class IMG extends Component {
    constructor(props) {
        super(props);
        this.src = this.props.src
    }

    componentDidMount = () => loadImgAsBase64({
        url: this.src,
        onReceiveBase64: (base64) => { this.src = base64 }
    })

    render = () => <img src={this.src} style={{ margin: 0, ...this.props.style }}/>
}

export const ImageMJML = ({ src, style }) => mjmlTemplate({
    tag: MJML.IMAGE,
    attributes: {
        src,
        ...objectDasherization(style)
    }
})

export default {
    Image,
    ImageIcon,
    ImageMJML
}
