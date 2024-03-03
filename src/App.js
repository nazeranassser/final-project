import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Blog from './components/Blog';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/blog/:id" component={Blog} />
                    <Route path="/user/:id" component={ProfilePage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
