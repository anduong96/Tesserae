
import React, { Component } from 'react'
import EmailCanvas from '../containers/canvas'
import Editor from '../containers/editor'
import OptionsContainer from '../containers/options'

export const EmailBuilder = (props) => (
    <div className={'builder-wrapper'} >
        <OptionsContainer />
        <EmailCanvas {...props} />
        <Editor {...props} />
    </div>
)
