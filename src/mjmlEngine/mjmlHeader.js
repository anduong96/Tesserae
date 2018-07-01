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
            content: `@media all and (max-width: 480px) {
                td {
                    width: 100%!important;
                }
            }`
        })
    ]
})
