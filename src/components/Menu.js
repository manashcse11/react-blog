import React, {Component} from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Home from './Home';
import UserPost from './UserPost';
import About from './About';
import Users from './Users';
import Post from './Post';
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
                        <Link to="/users/78">Users</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} key="1"/>
                    <Route path="/about" component={About} key="2" />
                    <Route path="/users/:id" component={Users} key="3" />
                    <Route path="/posts/:id" component={Post} key="4" />
                    <Route path="/home-posts/page/:page" component={Home} key="5" />
                    <Route path="/user-posts/:user/page/:page" component={UserPost} key="6" />
                    <Route component={Notfound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Menu;