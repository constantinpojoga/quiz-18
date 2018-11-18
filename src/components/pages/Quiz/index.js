import React, { Component } from 'react';
import { connect } from 'react-redux';
// Components
import QuizForm from 'components/containers/QuizForm'
// Files
import './quiz.scss';
// import quiz from 'model/quiz.json';
import questions from 'model/questions.json';
// Functions
import { initQuizItems, setActiveItem } from 'redux/actions';

const mapStateToProps = state => ({
    activeQuizItem: state.activeQuizItem,
    quizItems: state.quizItems,
});

const mapDispatchToProps = dispatch => {
    return {
        initQuizItems: (val) => dispatch(initQuizItems(val)),
        setActiveItem: (val) => dispatch(setActiveItem(val)),
    };
};

class ConnectedQuiz extends Component {
    constructor() {
        super();

        this.init();
    }

    init() {
        this.questions = questions.map((question, id) => ({
            ...question,
            id,
        }))
    }

    componentDidMount() {
        if (!this.props.quizItems) this.props.initQuizItems(this.questions);
    }

    render() {
        return (
            <div className="quiz">
                <div className="container">
                    <QuizForm />
                </div>
            </div>
        )
    }
}

const Quiz = connect(mapStateToProps, mapDispatchToProps)(ConnectedQuiz);

export default Quiz;
