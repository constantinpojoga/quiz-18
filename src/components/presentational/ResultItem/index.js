import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
// Files
import './result-item.scss';

const ResultItem = (props) => (
    <div className="result-item">
        <div className="result-item__question">
            {`${props.id}: `}{renderHTML(props.question)}
        </div>

        <div className="result-item__complexity">
            Complexity: {[...Array(5)].map((e, i) => <span className={`result-item__star result-item__star--${props.complexity >= i + 1 ? 'green' : 'gray'}`} key={i}>&#x2605;</span>) }
        </div>

        <div className="result-item__answers">
            <div className="result-item__answer">
                Your answer is: <span className={`result-item__answer result-item__answer--${props.answerIsValid ? 'valid' : 'invalid'}`}>
                    {props.answer}
                </span> 
                <span className="result-item__answer-type">{props.answerIsValid ? '(Correct)' : '(Wrong answer)'} </span>
            </div>
        </div>

        <div className="result-item__explanation">Explanation: {renderHTML(props.explanation)}</div>
    </div>
)

ResultItem.propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    answerIsValid: PropTypes.bool.isRequired,
    complexity: PropTypes.number,
}

export default ResultItem
