import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CatWatcher from './pages/CatWatcher/CatWatcher'
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./components/Auth/PrivateRoute";
import './App.css';

/**
 * @component
 * @returns {React.Element} The main application component that includes routing for the Home, Login, and CatWatcher pages.
 */
function App() {
    return (
        <Router>
            <Switch>
                {/* Public Routes */}
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />

                {/* Private Routes */}
                <PrivateRoute path="/cat-watcher" component={CatWatcher} />
            </Switch>
        </Router>
    );
}

export default App;
