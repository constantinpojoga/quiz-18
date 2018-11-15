import React, { Component } from 'react';
import Header from 'components/containers/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from 'components/pages/Homepage';
import Quiz from 'components/pages/Quiz';
import Results from 'components/pages/Results';
import 'global/styles/base.scss';

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
