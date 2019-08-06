import React, {Component} from 'react';
import {BrowserRouter, Route, Link, NavLink, Switch} from 'react-router-dom';
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
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container d-flex justify-content-between">
                        <NavLink className="navbar-brand" to="/">React Blog</NavLink>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item" activeclassname="active">
                                    <NavLink className="nav-link" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item" activeclassname="active">
                                    <NavLink className="nav-link" to="/users/78">Users</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </nav>
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