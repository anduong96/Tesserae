import { mjmlTemplate, MJML } from './mjmlBasics'

export const mjmlBody = ({ contents, bodyAttributes }) =>  mjmlTemplate({
    tag: MJML.BODY,
    attributes: bodyAttributes,
    children: [
        buildWrapperLayers({ contents })
    ]
})

const buildWrapperLayers = ({ contents }) => mjmlTemplate({
    tag: MJML.CONTAINER,
    children: [
        mjmlTemplate({
            tag: MJML.WRAPPER,
            children: contents.map(
                (child) => (
                    mjmlTemplate({
                        tag: MJML.SECTION,
                        children: [
                            mjmlTemplate({
                                tag: MJML.COLUMN,
                                children: child
                            })
                        ]
                    })
                )
            )
        })
    ]
})
