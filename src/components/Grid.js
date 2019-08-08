import React from 'react';
import Card from './Card';

const Grid = (props) => {
    const {posts} = props.params;

    return (
        <div className="row">                        
            {
                posts.map(post => 
                    <div className="col-sm-3 mb-4" key={post.id}>
                        <Card post={post} truncateMeaningful={props.truncateMeaningful}/>
                    </div>
                )
            }             
        </div>
    );
}

export default Grid;

