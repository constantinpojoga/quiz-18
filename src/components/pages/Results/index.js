import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// Components
import ResultItem from 'components/presentational/ResultItem';
import { Link } from 'react-router-dom';
import Store from 'store/';
// Files
import './results.scss';
// Functions

const Results = () => {
    const { state } = useContext(Store);

    return (
        <ConnectedResults 
            quizItems={ state.quizItems }
        />
    );
}

const ConnectedResults = (props) => {
    const [formIsComplete, setFormIsComplete] = useState(false);
    const numberOfQuestions = props.quizItems.length;
    let correctAnswers = 0;

    // cDM
    useEffect(() => {
        const completedItems = props.quizItems.filter(el => el.itemResponse).length;
        correctAnswers = props.quizItems.filter(el => el.itemResponse === el.correct).length;
        
        if (completedItems === numberOfQuestions) {
            setFormIsComplete(true);
        }
    }, []);

    // If form is complete, return results
    if (formIsComplete) {
        return (
            <div className="container">
                <div className="results">
                    <h1 className="results__heading heading-1">Your results for the quiz:</h1>

                    { props.quizItems.map( (item, id) => (
                        <ResultItem 
                            id={item.id} 
                            key={id}
                            question={item.question}
                            answer={item.answers[item.itemResponse - 1]}
                            answerIsValid={item.itemResponse === item.correct}
                            explanation={item.explanation}
                            complexity={item.level}
                        />
                    )) }

                    <div className="results__score">
                        Your total score is 
                        <span className="results__score-span"> { correctAnswers } </span>
                        from <span className="results__score-span"> { numberOfQuestions }</span>. 
                        { correctAnswers === numberOfQuestions ? ' Perfect score!' : null}
                        { correctAnswers / numberOfQuestions < 1 && correctAnswers / numberOfQuestions >= 0.75? ' Great job!' : null}
                        { correctAnswers / numberOfQuestions < 0.8 && correctAnswers / numberOfQuestions >= 0.6? ' Good job!' : null}
                        { correctAnswers / numberOfQuestions < 0.6 && correctAnswers / numberOfQuestions >= 0.4? ' Not bad!' : null}
                        { correctAnswers / numberOfQuestions < 0.4? ' Better luck next time!' : null}
                    </div>
                </div>
            </div>
        );
    } 
    // Default action, if form is not completed, show a message and link to the form
    return (
        <div className="container">
            <div className="results">
                <h1 className="results__heading heading-1">You need to answer all quiz questions:</h1>
                <p className="results__text">Please follow this <Link to="/quiz">link</Link> or use the menu to go to the quiz page to finish the quiz.</p>
            </div>
        </div>
    );
}

Results.propTypes = {
    formIsSubmitted: PropTypes.bool,
    quizItems: PropTypes.array,
    maxScore: PropTypes.number,
    yourScore: PropTypes.number,
}

export default Results;
