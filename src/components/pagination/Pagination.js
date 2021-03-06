import React from 'react';

const Pagination = (props) => {
    const {page, total_pages, routeString} = props;
    if(total_pages === 1){
        return('');
    }    
    const pagination_li = [];
    const pagination_range = 5;
    const limit = page + pagination_range < total_pages ? page + pagination_range : total_pages;
    for (let start = page - pagination_range > 0 ? page - pagination_range : 1; start <= limit; start++){
        let li_class = start == page ? "page-item active" : "page-item";
        pagination_li.push(
            <li key={start} className={li_class}><a className="page-link" href={routeString + start}>{start}</a></li>
            );
    }

    const firstArrow = page > 1 ? (<li className="page-item">
            <a className="page-link" href={routeString + 1} aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span className="sr-only">Previous</span>
            </a>
        </li>) : "";
    
    const lastArrow = page !== total_pages ? (<li className="page-item">
            <a className="page-link" href={routeString + total_pages} aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
                <span className="sr-only">Next</span>
            </a>
        </li>) : "";

    return (
            <ul className="pagination">
                {firstArrow}
                {pagination_li}
                {lastArrow}                
            </ul>
    );
}

export default Pagination;