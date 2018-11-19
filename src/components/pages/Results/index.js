import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import ResultItem from 'components/presentational/ResultItem';
import { Link } from 'react-router-dom';
// Files
import './results.scss';
// Functions

const mapStateToProps = state => ({
    quizItems: state.quizItems,
    maxScore: state.maxScore,
    yourScore: state.yourScore
});
    
class ConnectedResults extends Component {
    checkIfFormIsComplete() {
        this.numberOfQuestions = this.props.quizItems.length;
        this.completedItems = this.props.quizItems.filter(el => el.itemResponse).length;
        this.formIsComplete = this.completedItems === this.numberOfQuestions;
        this.correctAnswers = this.props.quizItems.filter(el => el.itemResponse === el.correct).length;
    }

    render() {
        if (this.props.quizItems ) {
            this.checkIfFormIsComplete();
            
            if (this.formIsComplete) {
                return (
                    <div className="container">
                        <div className="results">
                            <h1 className="results__heading heading-1">Your results for the quiz:</h1>

                            {this.props.quizItems.map( (item, id) => (
                                <ResultItem 
                                    id={item.id} 
                                    key={id}
                                    question={item.question}
                                    answer={item.answers[item.itemResponse - 1]}
                                    answerIsValid={item.itemResponse === item.correct}
                                    explanation={item.explanation}
                                    complexity={item.level}
                                />
                            ))}

                            <div className="results__score">
                                Your total score is 
                                <span className="results__score-span"> {this.correctAnswers} </span>
                                from <span className="results__score-span"> {this.numberOfQuestions }</span>. 
                                {this.correctAnswers === this.numberOfQuestions ? ' Perfect score!' : null}
                                {this.correctAnswers / this.numberOfQuestions < 1 && this.correctAnswers / this.numberOfQuestions >= 0.75? ' Great job!' : null}
                                {this.correctAnswers / this.numberOfQuestions < 0.8 && this.correctAnswers / this.numberOfQuestions >= 0.6? ' Good job!' : null}
                                {this.correctAnswers / this.numberOfQuestions < 0.6 && this.correctAnswers / this.numberOfQuestions >= 0.4? ' Not bad!' : null}
                                {this.correctAnswers / this.numberOfQuestions < 0.4? ' Better luck next time!' : null}
                            </div>

                        </div>
                    </div>
                )
            } 
        } 
        
        // Default action
        return (
            <div className="container">
                <div className="results">
                    <h1 className="results__heading heading-1">You need to answer all quiz questions:</h1>

                    <p className="results__text">Please follow this <Link to="/quiz">link</Link> or use the menu to go to the quiz page to finish the quiz.</p>

                </div>
            </div>
        )
    }
}

const Results = connect(mapStateToProps)(ConnectedResults);

Results.propTypes = {
    formIsSubmitted: PropTypes.bool,
    quizAnswers: PropTypes.array,
}

export default Results;
