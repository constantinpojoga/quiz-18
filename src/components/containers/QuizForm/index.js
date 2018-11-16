import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Files
import './quiz-form.scss';
import questions from 'model/questions.json';
import QuizOption from '../../presentational/QuizOption';
// Functions
import { updateFormState, updateAnswers } from 'redux/actions';

const mapStateToProps = state => {
    return {
        formIsSubmitted: state.formIsSubmitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateFormState: (val) => dispatch(updateFormState(val)),
        updateAnswers: (arr) => dispatch(updateAnswers(arr)),
    };
};

class ConnectedQuizForm extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();

        this.state = {
            quizAnswers: []
        }
        // Bindings
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleSubmit(event) {
        console.log(this.state.quizAnswers.sort((a, b) => a.id < b.id))
        if (this.checkIfFormIsValid()) {
            this.props.updateFormState(true);
            this.props.updateAnswers(this.state.quizAnswers.sort((a, b) => a.id < b.id))
        } else {
            event.preventDefault();
            this.showErrors()
        }
    } 

    showErrors() {
        console.log('not valid yet')
    }

    handleChange(event) {
        const radio = event.target;
        this.setState({
            quizAnswers: [
                ...this.state.quizAnswers.filter(el => el.id !== parseInt(radio.dataset.id)), 
                {
                    id: parseInt(radio.dataset.id),
                    answer: parseInt(radio.value)
                }
            ]
        });
        setTimeout(() => {
            console.log(this.state.quizAnswers);
        }, 100);
    }

    checkIfFormIsValid() {
        return this.state.quizAnswers.length === questions.length
    }

    componentDidMount() {
        console.log('animation here')
    }

    render() {
        return (
            <form action="/results" className="quiz-form" ref={this.form} onSubmit={this.handleSubmit}>
                {questions.map((item, id) => {
                    return ( 
                        <QuizOption 
                            key={id}
                            id={id}
                            question={item.question} 
                            answer1={item.answers[0]}
                            answer2={item.answers[1]}
                            onChange={this.handleChange}
                        />
                    )
                })}

                <div className="quiz-form__error">Please answer all questions</div>

                <div className="quiz-form__submit">
                    <button  className="quiz-form__submit-btn" type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

const QuizForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedQuizForm);

QuizForm.propTypes = {
    formIsSubmitted: PropTypes.bool,
}

export default QuizForm