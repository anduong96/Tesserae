import { startCase } from 'lodash'

export const generateID = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
});

export const deepCopy = (target) => JSON.parse(JSON.stringify(target))

export const toTitle = (str) => startCase(str)

export default {
    generateID,
    deepCopy,
    toTitle
}
