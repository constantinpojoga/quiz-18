import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,
    INIT_QUIZ_ITEMS,
    SET_ACTIVE_ITEM,
    SET_ITEM_RESPONSE,
} from "store/constants/action-types";

const rootReducer = (state = {}, action) => {
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
        case INIT_QUIZ_ITEMS:
            return {
                ...state,
                quizItems: action.quizItems
            }
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                activeQuizItem: action.activeQuizItem
            }
        case SET_ITEM_RESPONSE: {
            return {
                ...state,
                quizItems: [...state.quizItems].map(item => {
                    if (item.id === action.itemId) {
                        return {
                            ...item,
                            itemResponse: action.itemResponse,
                        }
                    } else return item
                })
            }
        }
        default:
            return state;
    }
};

export default rootReducer;