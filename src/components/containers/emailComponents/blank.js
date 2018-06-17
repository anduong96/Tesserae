import React from 'react'

export const BlankIcon = () => (
    <div className={'email-component blank'}>
        <h4>{`<br>`}</h4>
    </div>
)

export const Blank = ({ onSetCurrentHover, id }) => (
    <div
        className={'canvas-component blank'}
        onMouseEnter={() => onSetCurrentHover(true, id)}
    >
        <br />
    </div>
)


export default { Blank, BlankIcon }

