import React from 'react';
import { Button } from 'antd'

export const SettingFooter = ({ onClone, onRemove }) => (
    <Button.Group className={'editor-footer-btn-container'} >
        <Button className={'editor-footer-clone-btn'} onClick={onClone}>
            Clone
        </Button>
        <Button className={'editor-footer-remove-btn'} onClick={onRemove}>
            Remove
        </Button>
    </Button.Group>
)
