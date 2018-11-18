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
});
    

class ConnectedResults extends Component {

    checkIfFormIsComplete() {
        this.numberOfQuestions = this.props.quizItems.length;
        this.completedItems = this.props.quizItems.filter(el => el.itemResponse).length;
        this.formIsComplete = this.completedItems === this.numberOfQuestions;
    }

    checkScore() {
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
                                Your total score is {this.correctAnswers} from {this.numberOfQuestions }
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
                    <h1 className="results__heading heading-1">You need to answer all quiz answers:</h1>

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
