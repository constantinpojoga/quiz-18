import React from 'react';
import renderHTML from 'react-render-html';
// Components
import GoToQuiz from 'components/presentational/GoToQuiz';
// Files
import quiz from 'model/quiz.json';
import './homepage.scss';

const Homepage = () => (
    <div className="homepage">
        <div className="container">
            <h1 className="homepage__title">{ quiz.sortTitle }</h1>

            <p className="homepage__text">{ renderHTML(quiz.introduction) }</p>

            <GoToQuiz href="/quiz"/>
        </div>
    </div>
);

export default Homepage
