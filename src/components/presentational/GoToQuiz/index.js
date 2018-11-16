
import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import './go-to-quiz.scss';

const GoToQuiz = (props) => (
    <div className="go-to-quiz">
        <Link to={props.href} className="go-to-quiz__link" title={props.title} >Go To QUIZ</Link>
    </div>
)

GoToQuiz.propTypes = {
    href: PropTypes.string
}

export default GoToQuiz

