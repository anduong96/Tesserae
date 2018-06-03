import React, { Component } from 'react'
import EmailBuilder from './creator'
import builderSettings from './settings'
import { generateID, deepCopy } from '../utils'

import '../../css/builder.css'
import '../../css/container.css'
import '../../css/icons.css'
import '../../css/canvas.css'
import '../../css/editor.css'

export default class Builder extends Component {
    state = {
        components: builderSettings.components,
        canvas: [],
        componentSelected: null
    }

    onDrop = (dropItem) => {
        const { removedIndex, addedIndex, payload, dropElement } = dropItem
        const canvas = deepCopy(this.state.canvas)
        let itemToAdd = payload

        if (removedIndex !== null) { itemToAdd = canvas.splice(removedIndex, 1)[0] }
        if (addedIndex !== null) { canvas.splice(addedIndex, 0, itemToAdd) }

        //generating id for easy removal
        canvas.map((item) => { item.id = generateID() })
        this.setState({ canvas })
    }

    onComponentFocus = ({ id }) => {
        const componentSelected = deepCopy(this.state.canvas.find((item) => item.id === id))
        this.setState({ componentSelected })
    }

    onRemove = (id) => {
        const canvas = deepCopy(this.state.canvas)
            .filter((item) => item.id !== id)

        this.setState({ canvas })
    }

    onClone = (id) => {
        const canvas = deepCopy(this.state.canvas)
        const index = canvas.findIndex(components => components.id === id)
        const itemToAdd = deepCopy(canvas[index])

        canvas.splice(index + 1, 0, itemToAdd)
        this.setState({ canvas })
    }

    render = () => (
        <EmailBuilder
            {...this.state}
            onDrop={this.onDrop}
            onRemove={this.onRemove}
            onClone={this.onClone}
            onComponentFocus={this.onComponentFocus}
        />
    )
}
