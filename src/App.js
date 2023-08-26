import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatWatcherPage from './pages/CatWatcherPage'
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/Auth/PrivateRoute";
import './App.css';

function App() {

    return (
        <Router>
            <Switch>
                {/* Public Routes */}
                <Route exact path="/" component={HomePage}/>
                <Route path="/login" component={LoginPage}/>

                {/* Private Routes */}
                <PrivateRoute path="/cat-watcher" component={CatWatcherPage} />
            </Switch>
        </Router>
    );
}

export default App;
