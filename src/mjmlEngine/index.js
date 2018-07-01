import { mjmlTemplate, MJML } from './mjmlBasics'
import { mjmlHeader } from './mjmlHeader'
import { mjmlBody } from './mjmlBody'

export const makeMJML = ({ canvas, contents }) => (
    mjmlTemplate({
        tag: MJML.MJML,
        children: [
            mjmlHeader(),
            mjmlBody({ contents })
        ]
    })
)
