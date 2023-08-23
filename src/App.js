import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatWatcherPage from './pages/CatWatcherPage'
import './App.css';

function App() {

    return (
        <Router>
            <Switch>
                {/*<Route path="/" exact component={HomePage}/>*/}
                <Route path="/" component={CatWatcherPage} />
            </Switch>
        </Router>
    );
}

export default App;
