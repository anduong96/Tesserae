import React from 'react'
import { Button, Icon } from 'antd'

const generalButtonSettings = {
    ghost: true,
    shape: 'circle',
    size: 'small',

}
const closeButtonSettings = {
    className: 'close-button',
    ...generalButtonSettings
}
const removeButtonSettings = {
    className: 'remove-button',
    ...generalButtonSettings
}
const cloneButtonSettings = {
    className: 'clone-button',
    ...generalButtonSettings
}

export const Menu = ({ onRemove, onClone, onSetCurrentHover, id }) => (
    <div className={'hovering-menu'}>
        <Button {...closeButtonSettings} onClick={() => onSetCurrentHover(false, id)} ><Icon type={'close'}/></Button>
        <Button {...removeButtonSettings} onClick={() => onRemove(id)} ><Icon type={'minus'}/></Button>
        <Button {...cloneButtonSettings} onClick={() => onClone(id)}  ><Icon type={'plus'}/></Button>
    </div>
)
