import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
// Files
import './quiz-option.scss'

const QuizOption = (props) => (
    <div className="quiz-option">
        <div className="quiz-option__eyebrow">
            Question {props.id}:
        </div>
        <div className="quiz-option__question">
            {renderHTML(props.question)}
        </div>

        <input type="radio" 
            className="quiz-option__radio"
            id={`question-${props.id}-1`} 
            name={`question-${props.id}`} 
            value={1}
            data-id={props.id} 
            onChange={props.onChange}
        />

        <label htmlFor={`question-${props.id}-1`}
            className="quiz-option__label">
            {props.answer1}
        </label>

        <input type="radio"
            className="quiz-option__radio" 
            id={`question-${props.id}-2`} 
            name={`question-${props.id}`} 
            value={2} 
            data-id={props.id}
            onChange={props.onChange}
        />

        <label htmlFor={`question-${props.id}-2`}
            className="quiz-option__label">
            {props.answer2}
        </label>
    </div>
);

QuizOption.propTypes = {
    question: PropTypes.string.isRequired,
    answer1: PropTypes.string.isRequired,
    answer2: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default QuizOption;