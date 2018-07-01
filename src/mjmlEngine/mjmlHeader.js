import { mjmlTemplate, MJML } from './mjmlBasics'

export const mjmlHeader = () => mjmlTemplate({
    tag: MJML.HEADER,
    children: [
        mjmlTemplate({
            tag: MJML.TITLE,
            content: 'Tesserae'
        }),
        mjmlTemplate({
            tag: MJML.STYLE,
            attributes: {},
            content: `
            @media all and (max-width: 480px) {
                td {
                    width: 100% !important;
                }
            }
            td {
                padding: 0 !important;
            }
            .mj-container {
                padding-top: 20px;
                padding-bottom: 20px;
            }`
        }),
        mjmlTemplate({
            tag: MJML.ALL,
            attributes: {
                padding: '0px'
            }
        })
    ]
})
