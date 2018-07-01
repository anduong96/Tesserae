
import React from 'react'
import Header from '../../components/header'
import EmailCanvas from '../containers/canvas'
import Editor from '../containers/editor'
import OptionsContainer from '../containers/options'

export const EmailBuilder = (props) => (
    <div className={'builder'}>
        <div className={'builder-header'}>
            <Header siteTitle={'Tesserae v3'}/>
        </div>
        <div className={'builder-wrapper'} >
            <OptionsContainer />
            <EmailCanvas {...props} />
            <Editor {...props} />
        </div>
    </div>
)
