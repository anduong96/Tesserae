import { ImageMJML } from './image'

export const parseCanvasIntoMJML = (contents) => contents.map(
    (item) => {
        return {
            image: ImageMJML(item.config)
        }[item.name]
    }
)
