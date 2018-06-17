import ACTIONS from '../types';

export const onAddToCanvas = (dropItem) => ({
    type: ACTIONS.ADD_TO_CANVAS,
    dropItem
});

export const onRemoveFromCanvas = (componentID) => ({
    type: ACTIONS.REMOVE_FROM_CANVAS,
    componentID
});

export const onCloneFromCanvas = (componentID) => ({
    type: ACTIONS.CLONE_FROM_CANVAS,
    componentID
});

export const onChangeComponentConfig = (componentID, proposedConfig) => ({
    type: ACTIONS.CHANGE_COMPONENT_CONFIG,
    componentID,
    proposedConfig
});

export const onFocusOnCanvasComponent = (isFocus, componentID) => ({
    type: ACTIONS.FOCUS_ON_CANVAS_COMPONENT,
    isFocus,
    componentID
});

export const onChangeCanvasStyle = (style) => ({
    type: ACTIONS.CHANGE_CANVAS_STYLE,
    style
});
