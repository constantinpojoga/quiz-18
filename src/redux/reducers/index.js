import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,
    UPDATE_ANSWERS,
    UPDATE_FORM_STATE,

} from "../constants/action-types";

const initialState = {
    menuIsOpen: false,
    overlayIsActive: false,
    formIsSubmitted: false,
    quizAnswers: []
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
        case UPDATE_ANSWERS:
            return { ...state,
                quizAnswers: action.quizAnswers
            };
        case UPDATE_FORM_STATE:
            return { ...state,
                formIsSubmitted: action.formIsSubmitted
            }
        default:
            return state;
    }
};

export default rootReducer;