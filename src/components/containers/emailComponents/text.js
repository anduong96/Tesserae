import React from 'react'
import textSVG from '../../../img/icons/text.svg'

export const TextIcon = () => (
    <div className={'email-component text'}>
        <img src={textSVG} className={'text-icon'} />
    </div>
)

export const Text = ({ onFocus, onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component text'}
        onClick={() => onFocus({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <p style={config.style}>{config.text}</p>
    </div>
)

export default { Text, TextIcon }
