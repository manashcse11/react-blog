import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Users from './Users';
import Notfound from './Notfound';

class Menu extends Component {
    render(){
        return(
            <BrowserRouter>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/users/:id" component={Users} />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Menu;