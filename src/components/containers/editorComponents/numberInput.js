import React from 'react'
import { InputNumber } from 'antd'
import { FormWrapper } from './form'

export const NumberInput = ({
    label,
    max,
    min,
    defaultValue,
    onChange
}) => (
    <FormWrapper label={label || ''} labelStyle={{fontWeight: 100, padding: 0, margin: 0}}>
        <InputNumber
            min={min || 0}
            max={max || 30}
            defaultValue={defaultValue || 0}
            onChange={onChange}
        />
    </FormWrapper>
)
