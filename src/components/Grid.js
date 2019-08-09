import React from 'react';
import Card from './Card';
import UserPostLink from './UserPostLink';

const Grid = (props) => {
    const {posts} = props.params;

    return (
        <div className="row">                        
            {
                posts.map(post => 
                    <div className="col-sm-3 mb-4" key={post.id}>
                        <Card>                            
                            <h5 className="card-title">{post.title}</h5>
                            <UserPostLink post={post} /> {/* To get advantage of condition create separate component */} 
                            <h6 className="card-subtitle mb-2 text-muted">{post.created_at}</h6>
                            <p className="card-text">{props.truncateMeaningful(post.body, 110)}... <a href={"/posts/" + post.id} className="card-link">Read more</a></p>
                        </Card>
                    </div>
                )
            }             
        </div>
    );
}

export default Grid;

