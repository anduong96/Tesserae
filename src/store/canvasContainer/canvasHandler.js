import { generateID, deepCopy } from '../utils'

export default class canvasHandler {
    static onAdd = function(canvas, dropItem) {
        const { removedIndex, addedIndex, payload } = dropItem
        const newCanvas = canvas ? deepCopy(canvas) : []
        let itemToAdd = payload

        if (removedIndex !== null) { itemToAdd = newCanvas.splice(removedIndex, 1)[0] }
        if (addedIndex !== null) { newCanvas.splice(addedIndex, 0, itemToAdd) }

        //generating new ID for easy handling
        newCanvas.map((item) => { item.id =  generateID()})

        localStorage.setItem('tesseraeCanvas', JSON.stringify(newCanvas))
        return newCanvas
    }

    static onRemove = function(canvas, id) {
        const newCanvas = deepCopy(canvas)
            .filter((item) => item.id != id)

        saveToStorage(newCanvas)
        return newCanvas
    }

    static onClone = function(canvas, id) {
        const newCanvas = deepCopy(canvas)
        const index = newCanvas.findIndex((item) => item.id === id)
        const itemToAdd = deepCopy(newCanvas[index])

        newCanvas.splice(index + 1, 0, itemToAdd)
        newCanvas.map((item) => { item.id =  generateID()})

        saveToStorage(newCanvas)
        return newCanvas
    }

    static onChangeComponentConfig = function (canvas, id, proposedConfig) {
        const newCanvas = deepCopy(canvas)
        const target = newCanvas.filter((item) => item.id === id)[0]

        Object.keys(proposedConfig)
            .forEach((key) => { target.config[key] = proposedConfig[key] })

        saveToStorage(newCanvas)
        return newCanvas
    }
}

const saveToStorage = (target) => localStorage.setItem('tesseraeCanvas', JSON.stringify(target))
