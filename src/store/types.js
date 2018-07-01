const ACTIONS = `
    #-----------------------------------------------
    # OPTIONS CONTAINER
    #-----------------------------------------------
    OPTION_DRAG_START
    OPTION_DRAG_END

    #-----------------------------------------------
    # CANVAS CONTAINER
    #-----------------------------------------------
    SET_CANVAS
    CHANGE_CANVAS_STYLE
    ADD_TO_CANVAS
    REMOVE_FROM_CANVAS
    CLONE_FROM_CANVAS
    CHANGE_COMPONENT_CONFIG
    FOCUS_ON_CANVAS_COMPONENT

`.replace(/[#].*$/gm, '').trim().split(/\s+/).reduce((sum, itm) => {
        sum[itm] = itm;
        return sum;
    }, {});

export default ACTIONS;
