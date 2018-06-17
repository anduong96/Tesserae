import React from 'react'
import { ImageTextTopIcon, ImageTextTop } from './imageTextTop'

export const DoubleImageTextIcon = () => (
    <div className={'email-component double-image-text'} style={{ display: 'flex' }}>
        <div className={'email-component-stacks'}>
            <ImageTextTopIcon />
            <ImageTextTopIcon />
        </div>
    </div>
)

export const DoubleImageText = ({ onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component double-image-text'}
        style={config.style}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        { config.options.map(( item, index ) => <ImageTextTop {...item} key={index}/> )}
    </div>
)

export default { DoubleImageText, DoubleImageTextIcon }
