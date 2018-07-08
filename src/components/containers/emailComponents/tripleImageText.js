import React from 'react'
import { ImageTextTopIcon, ImageTextTop } from './imageTextTop'

export const TripleImageTextIcon = () => (
    <div className={'email-component triple-image-text'}>
        <div className={'email-component-stacks'}>
            <ImageTextTopIcon />
            <ImageTextTopIcon />
            <ImageTextTopIcon />
        </div>
    </div>
)

export const TripleImageText = ({ onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component triple-image-text'}
        style={config.style}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        { config.options.map(( item, index ) => <ImageTextTop {...item} key={index}/> )}
    </div>
)


export default {
    TripleImageText,
    TripleImageTextIcon
}
