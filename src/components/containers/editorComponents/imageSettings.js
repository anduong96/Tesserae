import React, { Component } from 'react'
import { Input, Slider, Collapse } from 'antd'
import { FormWrapper } from './form'
import { CommonSettings } from './commonSettings'

export const ImageSettings = ({
    name,
    id,
    config,
    onConfigChange
}) => (
    <div className={'image-settings'}>
        <FormWrapper label={'Source'}>
            <Input
                placeholder={'Image Address'}
                value={config.src}
                onChange={(event) => onConfigChange(id, { src: event.target.value })}
            />
        </FormWrapper>
        <Collapse bordered={false} defaultActiveKey={['style']}>
            <Collapse.Panel header='Advance Settings' key={'style'}>
                <CommonSettings {...{ name, id, config, onConfigChange }} noSize noBackground/>
            </Collapse.Panel>
        </Collapse>
    </div>
)
