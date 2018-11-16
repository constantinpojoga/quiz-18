import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,

} from "../constants/action-types";

const initialState = {
    menuIsOpen: false,
    overlayIsActive: false,
    formIsSubmitted: true,
    formIsInvalid: false,
    invalidFormItems: [],
    quizAnswers: [1, 2, 1, 1, 2, 2]
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