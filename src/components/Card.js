import React from 'react';

const Card = (props) => {
    const {post, truncateMeaningful} = props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="font-italic"><a href={"/user-posts/" + post.users.id + "/page/1"} className="card-link">{post.users.name}</a></p>
                <h6 className="card-subtitle mb-2 text-muted">{post.created_at}</h6>
                <p className="card-text">{truncateMeaningful(post.body, 110)}... <a href={"/posts/" + post.id} className="card-link">Read more</a></p>
            </div>
        </div>
    );
}

export default Card;