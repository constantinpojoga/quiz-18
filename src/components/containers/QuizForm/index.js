import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Files
import './quiz-form.scss';
import QuizItem from 'components/presentational/QuizItem'
// Functions
import { setActiveItem, setItemResponse } from 'redux/actions';

const mapStateToProps = state => ({
    activeQuizItem: state.activeQuizItem,
    quizItems: state.quizItems,
});

const mapDispatchToProps = dispatch => {
    return {
        setActiveItem: (val) => dispatch(setActiveItem(val)),
        setItemResponse: (itemId, itemResponse) => dispatch(setItemResponse(itemId, itemResponse))
    };
};

class ConnectedQuizForm extends Component {
    constructor(props) {
        super(props);

        this.settings = {
            validAnswerModifier: 'valid',
            invalidAnswerModifier: 'invalid'
        }
        // Bindings
        this.handleClick = this.handleClick.bind(this);
        this.handleContinue = this.handleContinue.bind(this);
    }

    handleClick(event) {
        const element = event.target;
        const elementId = parseInt(element.dataset.id);
        const itemResponse = parseInt(element.dataset.answer)

        this.props.setItemResponse(elementId, itemResponse);
    }

    handleContinue() {
        this.props.setActiveItem(this.props.activeQuizItem + 1);
    }

    render() {
        if (this.props.quizItems) {
            return (
                <QuizItem 
                    question={this.props.quizItems[this.props.activeQuizItem].question}
                    id={this.props.quizItems[this.props.activeQuizItem].id}
                    answers={this.props.quizItems[this.props.activeQuizItem].answers}
                    handleClick={this.handleClick}
                    handleContinue={this.handleContinue}
                    numberOfQuestions={this.props.quizItems.length}
                    itemHasResponse={this.props.quizItems[this.props.activeQuizItem].itemHasResponse}
                    itemResponse={this.props.quizItems[this.props.activeQuizItem].itemResponse}
                    correct={this.props.quizItems[this.props.activeQuizItem].correct}
                />
            )            
        } else {
            return <div>Loading...</div>
        }
    }
}

const QuizForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedQuizForm);

QuizForm.propTypes = {
    quizItems: PropTypes.array,
    activeQuizItem: PropTypes.number
}

export default QuizForm