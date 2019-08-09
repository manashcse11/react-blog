import React from 'react';

const UserPostLink = (props) => {
    const {post} = props;

    if(post.users){
        return (
            <p className="font-italic"><a href={"/user-posts/" + post.users.id + "/page/1"} className="card-link">{post.users.name}</a></p>
        );
    }    
    return ("");
}

export default UserPostLink;