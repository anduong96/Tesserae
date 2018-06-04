import React from 'react'
import { ChromePicker as ColorMenu } from 'react-color'
import { Popover } from 'antd'

export const ColorPicker = ({ color, onChange, children }) => (
    <Popover
        style={{ padding: 0 }}
        content={<ColorMenu color={color} onChangeComplete={onChange}/>}
        trigger={'click'}
        placement={'right'}
    >
        {children}
    </Popover>
)
