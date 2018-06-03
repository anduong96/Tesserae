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
const cloneButtonSettings = {
    className: 'clone-button',
    ...generalButtonSettings
}

export const Menu = ({ onRemove, onClone, id }) => (
    <div className={'hovering-menu'}>
        <Button {...closeButtonSettings} onClick={() => onRemove(id)} ><Icon type={'close'}/></Button>
        <Button {...cloneButtonSettings} onClick={() => onClone(id)}  ><Icon type={'copy'}/></Button>
    </div>
)
