import React, {Component} from 'react';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
            , isLoaded: false
            , post: {}
        };
    }

    componentDidMount(){
        const {params} = this.props.match;
        let url = "http://lc.laravelrestpassport.com/api/posts/"+params.id;

        fetch(url)
        .then(response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true
                , post: result.post
            });
        }
        , error => {
            this.setState({
                isLoaded: true
                , error
            });
        }
        );
    }

    render() {
        const post = this.state.post;
        return (
                <div>
                    <h1>{post.title}</h1>
                    <h6 className="card-subtitle mb-2 text-muted">{post.created_at}</h6>
                    <p>{post.body}</p>
                </div>
                );
    }
}

export default Post;