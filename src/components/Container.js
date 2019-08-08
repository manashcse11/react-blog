import React from 'react';

const Container = (props) => {
    return (
        <div className="album py-5 bg-light">
            <div className="container">
                {props.children}
            </div>
        </div>
    );
}

export default Container;
