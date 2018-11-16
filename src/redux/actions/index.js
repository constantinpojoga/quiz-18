import { 
    SET_MENU_STATE,
    SET_OVERLAY_STATE,
    UPDATE_ANSWERS,
    UPDATE_FORM_STATE,
} from "../constants/action-types";

export const setMenuState = (menuIsOpen) => ({ type: SET_MENU_STATE, menuIsOpen });

export const setOverlayState = (overlayIsActive) => ({ type: SET_OVERLAY_STATE, overlayIsActive });

export const updateAnswers = (quizAnswers) => ({ type: UPDATE_ANSWERS, quizAnswers});

export const updateFormState = (formIsSubmitted) => ({ type: UPDATE_FORM_STATE, formIsSubmitted })