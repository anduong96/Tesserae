import React from 'react'
import imageSVG from '../../../img/icons/image.svg'
import textSVG from '../../../img/icons/text.svg'

export const ImageTextLeftIcon = () => (
    <div className={'email-component image-text-left'}>
         <img src={imageSVG} className={'image-icon'} />
         <img src={textSVG} className={'text-icon'} />
    </div>
)


export const ImageTextLeft = ({ onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component image-text-left'}
        style={config.style}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <p style={config.descript.style}>{config.descript.text}</p>
        <img src={config.image.src} style={config.image.style} />
    </div>
)



export default {
    ImageTextLeft,
    ImageTextLeftIcon
}
