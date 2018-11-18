import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,
    INIT_QUIZ_ITEMS,
    SET_ACTIVE_ITEM,
    SET_ITEM_RESPONSE,
} from "../constants/action-types";

export const setMenuState = (menuIsOpen) => ({ type: SET_MENU_STATE, menuIsOpen });

export const setOverlayState = (overlayIsActive) => ({ type: SET_OVERLAY_STATE, overlayIsActive });

export const initQuizItems = (quizItems) => ({ type: INIT_QUIZ_ITEMS, quizItems });

export const setActiveItem = (activeQuizItem) => ({ type: SET_ACTIVE_ITEM, activeQuizItem });

export const setItemResponse = (itemId, itemResponse) => ({ type: SET_ITEM_RESPONSE, itemId, itemResponse });
 