import React from 'react'
import imageSVG from '../../../img/icons/image.svg'

export const ImageIcon = () => (
    <div className={'email-component image'}>
        <img src={imageSVG} className={'image-icon'} />
    </div>
)

export const Image = ({ onFocus, onSetCurrentHover,config, id }) => (
    <div
        className={'canvas-component image'}
        onClick={() => onFocus({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <img src={config.src} style={{ margin: 0, ...config.style }}/>
    </div>
)

export default { Image, ImageIcon}
