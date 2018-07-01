export const mjmlTemplate = ({ tag, attributes, children, content }) => ({
    tagName: tag || undefined,
    content: content || undefined,
    attributes: attributes || undefined,
    children: children ? [ ...children ] : undefined
})

export const MJML = {
    MJML: 'mjml',
    HEADER: 'mj-head',
    TITLE: 'mj-title',
    STYLE: 'mj-style',
    BODY: 'mj-body',
    CONTAINER: 'mj-container',
    WRAPPER: 'mj-wrapper',
    SECTION: 'mj-section',
    COLUMN: 'mj-column',
    IMAGE: 'mj-image',
}
