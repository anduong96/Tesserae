import React, { Component } from 'react'
import { Input, Collapse, Button, Switch, Icon } from 'antd'
import { FormWrapper } from './form'
import { HR } from '../../commons/divider'
import { Column } from '../../commons/column'
import { ColorPicker, ColorButtonSettings } from '../colorPicker'
import { CommonSettings } from './commonSettings'

const AdditionalSettings = ({
    id,
    label,
    config,
    onStyleChange
}) => (
    <div className={'row'}>
        <HR label={label} />
        <Column size={12}>
            <FormWrapper label={'Font Color'}>
                <ColorPicker
                    onChange={(color) => onStyleChange({ ...config.style , color: color.hex })}
                    color={config.style.backgroundColor || 'black'}
                >
                    <Button style={{ backgroundColor: config.style.backgroundColor || 'white', ...ColorButtonSettings }} />
                </ColorPicker>
            </FormWrapper>
        </Column>
        <CommonSettings yesFont {...{id, config}} onConfigChange={() => console.log(1)}/>
    </div>
)

export default class TitleSettings extends Component {
    onChangeTitle = (id, title) => this.props.onConfigChange(id, {
        ...this.props.config,
        title
    })

    onChangeSubtitle = (id, subtitle) => this.props.onConfigChange(id, {
        ...this.props.config,
        subtitle
    })

    render = () => {
        const { config, name, id, onConfigChange } = this.props
        const { style, title, subtitle } = config
        return (
            <div className={'editor-component-title'} >
                <FormWrapper label={'Background Color'}>
                    <ColorPicker
                        onChange={(color) => onConfigChange(id, { style: { ...style , backgroundColor: color.hex } })}
                        color={style.backgroundColor || 'white'}
                    >
                        <Button style={{ backgroundColor: style.backgroundColor || 'white', ...ColorButtonSettings}} />
                    </ColorPicker>
                </FormWrapper>
                <FormWrapper label={'Title'}>
                    <Input
                        placeholder={'Text of tile'}
                        value={title.text}
                        style={title.style}
                        onChange={(event) => this.onChangeTitle(id, { ...title, text: event.target.value })}
                    />
                </FormWrapper>
                <FormWrapper label={'Subtitle'}>
                    <Input
                        placeholder={'Text of subtitle'}
                        value={subtitle.text}
                        style={subtitle.style}
                        onChange={(event) => this.onChangeSubtitle(id, { ...subtitle, text: event.target.value })}
                    />
                </FormWrapper>
                <Collapse bordered={false} defaultActiveKey={['style']}>
                    <Collapse.Panel header='Additional Settings' key={'style'}>
                        <AdditionalSettings label={'Title'} config={title} />
                        <br />
                        <AdditionalSettings label={'Subtitle'} config={subtitle} />
                    </Collapse.Panel>
                </Collapse>
            </div>
        )
    }
}


