import React from 'react'
import { Form } from 'antd'

const defaultLabelStyle = {
    padding: 0,
    margin: 0,
    fontWeight: 'bold'
}

const FormLabel = ({ labelStyle, label }) => <p style={labelStyle || defaultLabelStyle}>{label}</p>

export const FormWrapper = ({ labelStyle, label, children, layout }) => (
    <Form layout={layout || 'vertical'}>
        <Form.Item label={<FormLabel {...{ labelStyle, label }}/>}>
            {children}
        </Form.Item>
    </Form>
)
