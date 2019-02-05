import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Store from 'store/';
// Files
import './quiz-form.scss';
import QuizItem from 'components/presentational/QuizItem';
// Functions
import { setActiveItem, setItemResponse } from 'store/actions';

const QuizForm = () => {
    const { state, dispatch } = useContext(Store);

    return (
        <ConnectedQuizForm 
            activeQuizItem={ state.activeQuizItem }
            quizItems={ state.quizItems }
            setActiveItem={ val => dispatch(setActiveItem(val)) }
            setItemResponse={ (itemId, itemResponse) => dispatch(setItemResponse(itemId, itemResponse)) }
        />
    );
}

const ConnectedQuizForm = (props) => {
    const handleClick = (event) => {
        const element = event.target;
        const elementId = parseInt(element.dataset.id);
        const itemResponse = parseInt(element.dataset.answer);

        props.setItemResponse(elementId, itemResponse);
        console.log('Response, ID: ', elementId, 'Response: ', itemResponse )
        console.log(props.state)
    };

    const handleContinue = () => {
        props.setActiveItem(props.activeQuizItem + 1);
    };

    return (
        <QuizItem 
            question={ props.quizItems[props.activeQuizItem].question }
            id={ props.quizItems[props.activeQuizItem].id }
            answers={ props.quizItems[props.activeQuizItem].answers }
            handleClick={ handleClick }
            handleContinue={ handleContinue }
            numberOfQuestions={ props.quizItems.length }
            itemHasResponse={ props.quizItems[props.activeQuizItem].itemHasResponse }
            itemResponse={ props.quizItems[props.activeQuizItem].itemResponse }
            correct={ props.quizItems[props.activeQuizItem].correct }
        />
    );           
}

QuizForm.propTypes = {
    quizItems: PropTypes.array,
    activeQuizItem: PropTypes.number,
    setItemResponse: PropTypes.func,
    setActiveItem: PropTypes.func,
}

export default QuizForm
