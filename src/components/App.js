import React, { Component } from 'react';
import Header from 'components/containers/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MetaTags from 'react-meta-tags';
// Components
import Homepage from 'components/pages/Homepage';
import Quiz from 'components/pages/Quiz';
import Results from 'components/pages/Results';
// Files
import 'global/styles/base.scss';
import quiz from 'model/quiz.json';

const mapStateToProps = state => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};

class ConnectedApp extends Component {
    render() {
        return (
            <Router>
                <div>
                <MetaTags>
                    <title>{quiz.title}</title>
                    <meta name="description" content={quiz.description} />
                    <meta name="keywords" content={quiz.keywords.join(', ')} />
                </MetaTags>
                    <Header / >

                    <main className="main">
                        <Switch>
                            <Route path='/quiz' component={Quiz}/>

                            <Route path='/results' component={Results}/>

                            <Route path='/' component={Homepage}/>
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
}

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;
