import React, { Component } from 'react';
import {
    BrowserRouter as RouterReact,
    Link,
    Switch,
    Route
} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import App from './App';
import Dashboard from './pages/Dashboard';

const loggedIn = true

export default class Router extends Component {

    signedInRoutes() {
        if (loggedIn) {
            return (
                <Route path="/new" render={() =>
                    <h1>Bienvenido</h1>
                }>
                </Route>
            )
        }
    }

    home() {
        if (loggedIn) return Dashboard
        return Home
    }
    render() {
        return (
            <RouterReact>
                <App>
                    <Switch>
                        <Route exact path="/" component={this.home()}></Route>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/sign-up" component={Login}></Route>
                        {this.signedInRoutes()}
                    </Switch>
                </App>
            </RouterReact>
        )
    }
}