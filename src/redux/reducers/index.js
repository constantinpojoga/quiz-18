import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,

} from "../constants/action-types";

const initialState = {
    menuIsOpen: false,
    overlayIsActive: false,
};

const rootReducer = (state = initialState, action) => {
    if (typeof action === 'undefined')  return state

    switch (action.type) {
        case SET_MENU_STATE:
            return { ...state,
                menuIsOpen: action.menuIsOpen
            };
        case SET_OVERLAY_STATE:
            return { ...state,
                overlayIsActive: action.overlayIsActive
            };
        default:
            return state;
    }
};

export default rootReducer;