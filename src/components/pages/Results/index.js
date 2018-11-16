import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Components
import ResultItem from 'components/presentational/ResultItem';
import { Link } from 'react-router-dom';
// Files
import './results.scss';
import questions from 'model/questions.json';
// Functions

const mapStateToProps = state => {
    return {
        formIsSubmitted: state.formIsSubmitted,
        quizAnswers: state.quizAnswers
    }
}

class ConnectedResults extends Component {
    componentDidMount() {
        this.score = this.checkScore();
        console.log(this.props)
    }

    checkScore() {

    }

    render() {
        if (this.props.formIsSubmitted && this.props.quizAnswers.length === questions.length ) {
            return (
                <div className="results">
                    <div className="container">
                        <h1 className="results__heading heading-1">Your results for the quiz:</h1>

                        {questions.map( (item, id) => (
                            <ResultItem 
                                id={id} 
                                key={id}
                                question={item.question}
                                answer={item.answers[parseInt(this.props.quizAnswers[id]) - 1]}
                                correctAnswer={item.answers[parseInt(item.correct) - 1]}
                                answerIsValid={item.answers[parseInt(this.props.quizAnswers[id]) - 1] === item.answers[parseInt(item.correct) - 1]}
                                explanation={item.explanation}
                                complexity={item.level}
                            />
                        ))}

                        <div className="results__score">
                            Your total score is 5 from {questions.length}
                        </div>

                    </div>
                </div>
            )
        } else {
            return (
                <div className="results">
                    <div className="container">
                        <h1 className="results__heading heading-1">You need to answer all questions first</h1>

                        <p className="results__text">Please follow this <Link to="/quiz">link</Link> or use the menu to go to the quiz page.</p>

                    </div>
                </div>
            )
        }
    }
}

const Results = connect(mapStateToProps)(ConnectedResults);

Results.propTypes = {
    formIsSubmitted: PropTypes.bool.isRequired,
    quizAnswers: PropTypes.array.isRequired,
}

export default Results;
