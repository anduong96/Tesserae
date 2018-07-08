import { ImageMJML } from './image'

export const parseCanvasIntoMJML = (contents) => contents.map(
    (item) => ({
        image: ImageMJML(item.config)
    }[item.name])
)
