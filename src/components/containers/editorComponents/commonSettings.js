import React from 'react'
import { Divider, Button, Slider } from 'antd'
import { NumberInput } from './numberInput'
import { SliderInput } from './sliderInput'
import { ColorPicker, ColorButtonSettings } from '../colorPicker'
import { Column } from '../../commons/column'

const dividerStyle = { marginTop: 0, marginBottom: 5 }

const BackgroundSettings = ({ style, onStyleChange }) => (
    <div className={'background-settings row'}>
        <Divider orientation='left' style={dividerStyle}>Background Color</Divider>
        <Column size={12}>
            <ColorPicker
                onChange={(color) => onStyleChange({ ...style, backgroundColor: color.hex })}
                color={style.backgroundColor || 'white'}
            >
                <Button style={{ backgroundColor: style.backgroundColor || 'white', ...ColorButtonSettings }} />
            </ColorPicker>
        </Column>
    </div>
)

const SizeSettings = ({ style, onStyleChange }) => (
    <div className={'size-settings row'}>
        <Divider orientation='left' style={dividerStyle}>Sizes</Divider>
        <Column size={6}>
            <SliderInput
                label={'Width'} d
                efaultValue={style.width}
                onStyleChange={(value) => onStyleChange({ ...style, width: `${value}%` })}
            />
        </Column>
        <Column size={6}>
            <SliderInput
                label={'Height'}
                defaultValue={style.height}
                onStyleChange={(value) => onStyleChange({ ...style, width: `${value}%` })}
            />
        </Column>
    </div>
)

const PaddingSettings = ({ style, onStyleChange }) => (
    <div className={'padding-settings row'}>
        <Divider orientation='left' style={dividerStyle}>Paddings</Divider>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Left'}
                defaultValue={style.paddingLeft}
                onChange={(paddingLeft) => onStyleChange({ ...style, paddingLeft })}
            />
        </Column>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Right'}
                defaultValue={style.paddingRight}
                onChange={(paddingRight) => onStyleChange({ ...style, paddingRight })}
            />
        </Column>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Top'}
                defaultValue={style.paddingTop}
                onChange={(paddingTop) => onStyleChange({ ...style, paddingTop })}
            />
        </Column>
        <Column size={6}>
            <NumberInput
                max={100}
                label={'Bottom'}
                defaultValue={style.paddingBottom}
                onChange={(paddingBottom) => onStyleChange({ ...style, paddingBottom })}
            />
        </Column>
    </div>
)

const FontSettings = () => (
    <div className={'row'}>
        <Column size={3} ><Button type="dashed" shape="circle" >A</Button></Column>
        <Column size={3} ><Button type="dashed" shape="circle" >B</Button></Column>
        <Column size={3} ><Button type="dashed" shape="circle" >C</Button></Column>
        <Column size={3} ><Button type="dashed" shape="circle" >D</Button></Column>
    </div>
)


export const CommonSettings = ({
    id,
    config,
    onConfigChange,
    yesBackground,
    yesSize,
    yesPadding,
    yesFont
}) => {
    const propsSettings = {
        style: config.style,
        onStyleChange: (style) => onConfigChange(id, { style })
    }

    return (
        <div className={'common-settings'}>
            { yesBackground && <BackgroundSettings {...propsSettings}/> }
            { yesSize &&  <SizeSettings {...propsSettings} /> }
            { yesPadding && <PaddingSettings {...propsSettings} />}
            { yesFont && <FontSettings {...propsSettings} /> }
        </div>
    )
}
