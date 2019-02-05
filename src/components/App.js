import React, { useReducer } from 'react';
import Header from 'components/presentational/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
// Components
import Homepage from 'components/pages/Homepage';
import Quiz from 'components/pages/Quiz';
import Results from 'components/pages/Results';
import Store, { initialState } from 'store/';
// Files
import 'global/styles/base.scss';
import quiz from 'model/quiz.json';
// Functions
import rootReducer from 'store/reducers';

const App = () => {
    const [state, dispatch] = useReducer(rootReducer, initialState);
    
    return (
        <Store.Provider value={{state, dispatch}}>
            <Router>
                <>
                    <MetaTags>
                        <title>{quiz.title}</title>
                        <meta name="description" content={quiz.description} />
                        <meta name="keywords" content={quiz.keywords.join(', ')} />
                    </MetaTags>

                    <Header / >

                    <main className="main">
                        <Switch>
                            <Route exact path='/quiz' component={Quiz}/>

                            <Route exact path='/results' component={Results}/> */}

                            <Route path='/' component={Homepage}/> 
                        </Switch> 
                    </main>
                </>
            </Router>
        </Store.Provider>
    );
}

export default App;
