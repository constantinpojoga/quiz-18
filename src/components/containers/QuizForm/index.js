import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Files
import './quiz-form.scss';
import questions from 'model/questions.json';
import QuizOption from '../../presentational/QuizOption';

const mapStateToProps = state => {
    return {
        formIsSubmitted: state.formIsSubmitted
    }
}

const mapDispatchToProps = dispatch => {
    return {
        // setVolume: (val) => dispatch(setVolume(val)),
        // setMenuState: (val) => dispatch(setMenuState(val)),
        // setOverlayState: (val) => dispatch(setOverlayState(val))
    };
};

class ConnectedQuizForm extends Component {
    constructor(props) {
        super(props);
        this.form = React.createRef();

        this.state = {
            
        }
        
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit')

    } 

    componentDidMount() {
        console.log(this.form.current)
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
                        />
                    )
                })}

                <div className="quiz-form__error">Please select an option for each question</div>

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