import React from 'react'
import { toTitle } from '../../utils'

export const PanelHeader = ({ title }) =>  <div className={'editor-header'} >{toTitle(title)}</div>

