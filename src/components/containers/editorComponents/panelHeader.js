import React from 'react'
import { toTitle } from '../../utils'

export const PanelHeader = ({ title, index }) => (
    <div className={'editor-header'} >
        {`Component ${index}: ${toTitle(title)}`}
    </div>
)

