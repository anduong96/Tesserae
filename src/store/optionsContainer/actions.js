import ACTIONS from '../types';

export const optionDragStart = (select) => ({
    type: ACTIONS.OPTION_DRAG_START,
    select
});

export const optionDragEnd = () => ({
    type: ACTIONS.OPTION_DRAG_END
});
