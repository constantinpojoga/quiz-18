import React, { Component } from 'react';
// Components
import QuizForm from 'components/containers/QuizForm'
// Files
import './quiz.scss';
import quiz from 'model/quiz.json'
class Quiz extends Component {

    render() {
        return (
            <div className="quiz">
                <div className="container">
                    <h1 className="quiz__heading heading-1">Please answer all this {quiz.numOfQuestions} short questions:</h1>

                    <p className="quiz__text">Please chose one option for each question:</p>

                    <QuizForm />
                </div>
            </div>
        )
    }
    
}

export default Quiz;
