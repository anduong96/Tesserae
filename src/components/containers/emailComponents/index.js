import React from 'react'
import { Title, TitleIcon } from './title'
import { Text, TextIcon } from './text'
import { Divider, DividerIcon } from './divider'
import { Image, ImageIcon } from './image'
import { ImageTextLeft, ImageTextLeftIcon } from './imageTextLeft'
import { ImageTextRight, ImageTextRightIcon } from './imageTextRight'
import { DoubleImageText, DoubleImageTextIcon } from './doubleImageText'
import { TripleImageText, TripleImageTextIcon } from './tripleImageText'
import { Location, LocationIcon } from './location'
import { Click, ClickIcon } from './click'
import { Blank, BlankIcon } from './blank'
import { Menu } from '../extras'


const CanvasComponentShort = (configs) => (
    <div className="draggable-item" >
        {configs.id === configs.currentHover && <Menu {...configs}/>}
        {{
            text: <Text {...configs} />,
            blank: <Blank {...configs}/>,
            title: <Title {...configs} />,
            image: <Image {...configs} />,
            button: <Click {...configs} />,
            divider: <Divider {...configs}/>,
            location: <Location {...configs} />,
            imageTextLeft: <ImageTextLeft {...configs} />,
            imageTextRight: <ImageTextRight {...configs} />,
            doubleImageText: <DoubleImageText {...configs} />,
            tripleImageText: <TripleImageText {...configs} />,
        }[configs.name]}
    </div>
)

export const CanvasComponents = ({
    configurations,
    onFocus,
    index,
    currentHover,
    onSetCurrentHover,
    onClone,
    onRemove }) => (

    <CanvasComponentShort
        {...configurations}
        index={index}
        onFocus={onFocus}
        onClone={onClone}
        onRemove={onRemove}
        currentHover={currentHover}
        onSetCurrentHover={onSetCurrentHover}
    />
)

export const OptionComponents = ({ name, userSelect}) => (
    <div className={`icon-container${(name === userSelect) ? ' is-being-drag': ''}`}>
        {{
            text: <TextIcon />,
            title: <TitleIcon />,
            image: <ImageIcon />,
            blank: <BlankIcon />,
            button: <ClickIcon />,
            divider: <DividerIcon />,
            location: <LocationIcon />,
            imageTextLeft: <ImageTextLeftIcon />,
            imageTextRight: <ImageTextRightIcon />,
            doubleImageText: <DoubleImageTextIcon />,
            tripleImageText: <TripleImageTextIcon />,
        }[name]}
    </div>
)


export default { CanvasComponents, OptionComponents }

