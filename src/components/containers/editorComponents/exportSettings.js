import React, { Component } from 'react'
import Download from '@axetroy/react-download'
import { mjml2html } from 'mjml'
import { Button } from 'antd'

const defaultTemplate = `
<mjml>
  <mj-body>
    <mj-section>
      <mj-column>

        <mj-image width="100" src="/assets/img/logo-small.png"></mj-image>

        <mj-divider border-color="#F45E43"></mj-divider>

        <mj-text font-size="20px" color="#F45E43" font-family="helvetica">Hello World</mj-text>

      </mj-column>
    </mj-section>
  </mj-body>
</mjml>`

export class ExportSettings extends Component {
    state = {
        content: ''
    }

    parseToMJML = () => {
        const res = mjml2html(defaultTemplate);

        if (res) {
            this.setState({ content: res.html })
        } else {
            console.error(res);
        }
    }

    render = () => (
        <div>
            <Button onClick={this.parseToMJML} >Convert</Button>
            <Download file={'test.html'} content={this.state.content}>
                <Button onClick={this.parseToMJML} >Export To HTML File</Button>
            </Download>
        </div>
    )
}

export default ExportSettings
