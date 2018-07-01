import React from 'react'
import imageSVG from '../../../img/icons/image.svg'
import { mjmlTemplate, MJML } from '../../../mjmlEngine/mjmlBasics'
import { objectDasherization } from '../../utils'

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
        <img src={config.src} style={{ margin: 0, ...config.style }}/>
    </div>
)

export const ImageMJML = ({ src, style }) => {
    return mjmlTemplate({
        tag: MJML.IMAGE,
        attributes: {
            src,
            ...objectDasherization(style)
        }
    })
}

export default {
    Image,
    ImageIcon,
    ImageMJML
}
