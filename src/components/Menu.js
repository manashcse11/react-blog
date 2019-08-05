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
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">React Blog</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item" activeClassName="active">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item" activeClassName="active">
                                <NavLink className="nav-link" to="/users/78">Users</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users/78">Users</Link>
                    </li>
                </ul> */}
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