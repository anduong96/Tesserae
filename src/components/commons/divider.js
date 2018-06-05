import React from 'react'
import { Divider } from 'antd'

const dividerStyle = { marginTop: 0, marginBottom: 5 }
export const HR = ({ label, labelPosition }) => (
    <Divider
        orientation={labelPosition || 'left'}
        style={dividerStyle}>{label}
    </Divider>
)
