import { createContext } from 'react';
import questions from 'model/questions.json';
const Store = createContext();

export const initialState = {
    overlayIsActive: false,
    menuIsOpen: false,
    quizItems: questions.map((question, id) => ({
        ...question,
        id,
    })),
    activeQuizItem: 0,
}

export default Store
