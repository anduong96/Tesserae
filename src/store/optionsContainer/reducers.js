import ACTIONS from '../types';

const initialState = {
    userSelect: null,
    isDragging: false
};

const optionsContainer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONS.OPTION_DRAG_START:
            return {
                userSelect: action.select,
                isDragging: true
            };

        case ACTIONS.OPTION_DRAG_END:
            return {
                userSelect: null,
                isDragging: false
            };

        default:
            return state;
    }
};

export default optionsContainer;
