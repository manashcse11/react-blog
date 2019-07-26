import React, {Component} from 'react';

class Users extends Component {
    render(){
        const {params} = this.props.match;
        return (
            <h1>User ID: {params.id}</h1>
        );
    }
}

export default Users;