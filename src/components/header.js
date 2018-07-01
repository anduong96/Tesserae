import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button } from 'antd'
import { makeMJML } from '../mjmlEngine'
import { parseCanvasIntoMJML } from './containers/emailComponents/mjmlHelper'
import { downloadFile } from './utils'
import '../css/nav.css'

class Header extends Component {
    state = {}

    parseToMJML = () => makeMJML({
        canvas: { ...this.props.canvasContainer.canvasStyle },
        contents: parseCanvasIntoMJML(this.props.canvasContainer.canvas)
    })

    downloadContent = () => {
        axios.post(
            'https://api.mjml.io/v1/render',
            JSON.stringify({ mjml: JSON.stringify(this.parseToMJML()) }),
            { auth: { username: '*ENCRYPTED_ID*', password: '*ENCRYPTED_PASSWORD*' }}
        ).then((res) => {
            if(res.data) {
                this.setState({ ...res.data }, () => downloadFile('tesserae.html', res.data.html, 'html'))
            }
        })
    }

    render = () => (
        <div className={'nav-container row'}>
            <div className={'logo col-sm-12 col-md-2'}>{this.props.siteTitle}</div>
            <div className={'nav-button-group col-sm-12 col-md-10'}>
                <Button onClick={this.downloadContent} >Download</Button>
                <Button onClick={() => console.log(this.props.canvasContainer.canvas)} >Test</Button>
                <Button onClick={() => console.log(JSON.stringify({ mjml: JSON.stringify(this.parseToMJML()) }))} >Test API</Button>
                <Button onClick={() => console.log(JSON.stringify(this.parseToMJML()))} >Test Engine</Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    canvasContainer: state.canvasContainer
})

export default connect(
    mapStateToProps,
    null
)(Header)
