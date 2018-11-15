import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,
} from "../constants/action-types";

export const setMenuState = (menuIsOpen) => ({ type: SET_MENU_STATE, menuIsOpen });

export const setOverlayState = (overlayIsActive) => ({ type: SET_OVERLAY_STATE, overlayIsActive });
