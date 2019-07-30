import React, {Component} from 'react';
import Pagination from './pagination/Pagination';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null
            , isLoaded: false
            , posts: []
            , page: 1
            , total_pages: 0
        }
    }

    componentDidMount(){
        this.makeHttpRequest(1);
    }
    
    makeHttpRequest = (pageNumber) => {
        this.setState({
            page: pageNumber
        });
        let url = "http://lc.laravelrestpassport.com/api/posts?page="+pageNumber;

        fetch(url)
        .then(
            response => response.json())
        .then(result => {
            this.setState({
                isLoaded: true
                , posts: result.posts.data
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
        const {error, isLoaded, posts, page, total_pages} = this.state;

        if(error){
            return (<div>Error in loading</div>);
        }
        else if(!isLoaded){
            return (<div>Loading...</div>);
        }
        else{
            return (
                <div>
                    <div className="row">                        
                        {
                            posts.map(post => 
                                <div className="col-sm-3" key={post.id}>
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
                    <Pagination page={page} total_pages={total_pages} paginationHandler={this.makeHttpRequest} />                
                </div>
            );
        }
        return(
            <h1>Home Page</h1>
        ); 
    }
}

export default Home;