import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
// Components
import { Link } from 'react-router-dom';
// Files
import './quiz-item.scss'

const QuizItem = (props) => (
    <div className={ `quiz-item ${props.itemHasResponse ? 'quiz-item--has-response' : ''}` }>
        <div className="quiz-item__eyebrow">
            Question { props.id + 1 } of { props.numberOfQuestions }
        </div>
        <div className="quiz-item__question">
            { renderHTML(props.question) }
        </div>
        <ul className="quiz-item__answers">
            { props.answers.map((item, idx) => (
                <li className={`quiz-item__answer 
                ${ props.itemResponse === props.correct && props.itemResponse === idx + 1 ? " valid" : "" }
                ${ props.itemResponse && props.itemResponse !== props.correct && props.itemResponse === idx + 1 ? " invalid" : ""} ` }
                    key={ idx }
                    onClick={ props.handleClick }
                    data-id={ props.id }
                    data-answer={ idx + 1 }
                >{item}</li>
            )) }
        </ul>
        { props.itemResponse ? <div className="quiz-item__overlay"></div> : null }

        { props.itemResponse && props.id < props.numberOfQuestions - 1 ? <button className="quiz-item__continue" onClick={ props.handleContinue }>Continue</button> : null }

        { props.itemResponse && props.id === props.numberOfQuestions - 1 ? <Link className="quiz-item__view-results" to="results">View Results</Link> : null }
    </div>
);

QuizItem.propTypes = {
    question: PropTypes.string.isRequired,
    numberOfQuestions: PropTypes.number,
    answers: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleContinue: PropTypes.func.isRequired,
    itemResponse: PropTypes.number,
    correct: PropTypes.number.isRequired,
}

export default QuizItem;
