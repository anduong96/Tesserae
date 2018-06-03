import React from 'react'

export const BlankIcon = () => (
    <div className={'email-component blank'}>
        <h4>{`<br>`}</h4>
    </div>
)

export const Blank = ({ onFocus, onSetCurrentHover, id }) => (
    <div
        className={'canvas-component blank'}
        onClick={() => onFocus({ id })}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <br />
    </div>
)


export default { Blank, BlankIcon }

