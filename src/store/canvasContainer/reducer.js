import ACTIONS from '../types';
import canvasHandler from './canvasHandler'

const initialState = {
    canvas: [],
    canvasStyle: { backgroundColor: 'rgb(224, 224, 224)' },
    isDesktopView: true,
    isHoveringOver: null
};

const optionsContainer = (state = initialState, action) => {
    let canvas
    switch (action.type) {
        case ACTIONS.CHANGE_CANVAS_STYLE:

            return {
                ...state,
                canvasStyle: action.style
            }

        case ACTIONS.ADD_TO_CANVAS:
            return {
                ...state,
                canvas: canvasHandler.onAdd( state.canvas, action.dropItem )
            }

        case ACTIONS.REMOVE_FROM_CANVAS:
            return {
                ...state,
                canvas: canvasHandler.onRemove( state.canvas, action.componentID )
            }

        case ACTIONS.CLONE_FROM_CANVAS:
            return {
                ...state,
                canvas: canvasHandler.onClone( state.canvas, action.componentID )
            }

        case ACTIONS.CHANGE_COMPONENT_CONFIG:
            return {
                ...state,
                canvas: canvasHandler.onChangeComponentConfig(
                    state.canvas,
                    action.componentID,
                    action.proposedConfig )
            }

        case ACTIONS.FOCUS_ON_CANVAS_COMPONENT:
            return {
                ...state,
                isHoveringOver: action.isFocus? action.componentID : null
            }

        default:
            return state;
    }
};

export default optionsContainer;
