import React, {Component} from 'react';
import Configuration from '../Configuration';
import Pagination from './pagination/Pagination';

class UserPost extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
            , isLoaded: false
            , user_id: 0
            , user: {}
            , posts: []
            , page: 1
            , total_pages: 0
        }
        this.config = new Configuration();
    }

    componentDidMount(){
        this.makeHttpRequest();
    }
    
    makeHttpRequest = () => {
        const {params} = this.props.match;
        
        var user_id = params.user ? params.user : 1;
        var pageNumber = params.page ? params.page : 1;
        this.setState({
            page: pageNumber
            , user_id: user_id
        });
        let url = this.config.API_BASE_URL + "users/" + user_id + "/posts?per_page=12&page=" + pageNumber;

        fetch(url)
        .then(
            response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true
                , posts: result.posts.data
                , user: result.user
                , total_pages: result.posts.last_page
            });
        },
        error => {
            this.setState({
                isLoaded:true
                , error
            });
        }
        );
    }

    truncateMeaningful = (str, maxLength) => {
        if(str.length <= maxLength){
            return str;
        }
        //trim the string to the maximum length
        var trimmedString = str.substr(0, maxLength);

        //re-trim if we are in the middle of a word
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    }

    render() {
        const {error, isLoaded, posts, user, page, total_pages} = this.state;
        if(error){
            return (<div>Error in loading</div>);
        }
        else if(!isLoaded){
            return (<div>Loading...</div>);
        }
        else{
            return (
                <div className="album py-5 bg-light">
                    <div className="container">
                        <h3>{user.name}</h3>
                        <div className="row">                        
                            {
                                posts.map(post => 
                                    <div className="col-sm-3 mb-4" key={post.id}>
                                        <div className="card">
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">{post.created_at}</h6>
                                                <p className="card-text">{this.truncateMeaningful(post.body, 110)}... <a href={"/posts/" + post.id} className="card-link">Read more</a></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }             
                        </div>
                        <Pagination page={page} total_pages={total_pages} routeString={"/user-posts/" + this.state.user_id + "/page/"} />
                    </div>  
                </div>
            );
        }
    }
}

export default UserPost;