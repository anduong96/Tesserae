import React from 'react'
import dividerSVG from '../../../img/icons/divider.svg'

export const DividerIcon = () => (
    <div className={'email-component divider'} >
         <img src={dividerSVG} className={'divider-icon'} />
    </div>
)

export const Divider = ({ onSetCurrentHover, id }) => (
    <div
        className={'canvas-component-divider'}
        onClick={() => console.log({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <hr />
    </div>
)


export default {
    Divider,
    DividerIcon
}
