import React from 'react';
import { NoSettings } from './noSettings'
import { ImageSettings } from './imageSettings'
import TitleSettings from './titleSettings'

export const ComponentSettings = ({ config, onConfigChange }) => ({
    image: <ImageSettings {...config} onConfigChange={onConfigChange} />,
    divider: <NoSettings />,
    text: <NoSettings />,
    blank: <NoSettings />,
    title: <TitleSettings {...config} onConfigChange={onConfigChange}/>,
    button: <NoSettings />,
    location: <NoSettings />,
    imageTextLeft: <NoSettings />,
    imageTextRight: <NoSettings />,
    doubleImageText: <NoSettings />,
    tripleImageText: <NoSettings />
}[config.name])
