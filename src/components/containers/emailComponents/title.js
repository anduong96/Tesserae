import React from 'react'
import titleSVG from '../../../img/icons/title.svg'

export const TitleIcon = () => (
    <div className={'email-component title'}>
        <img src={titleSVG} className={'title-icon'}/>
    </div>
)

export const Title = ({ onSetCurrentHover, config, id }) => (
    <div
        className={'canvas-component title'}
        style={config.style}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <h1 style={config.title.style}>{config.title.text}</h1>
        <h4 style={config.subtitle.style}>{config.subtitle.text}</h4>
    </div>
)

export default { Title, TitleIcon }
