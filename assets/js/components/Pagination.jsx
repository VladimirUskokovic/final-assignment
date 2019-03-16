import React, { Component } from 'react';

class Pagination extends Component {
    render() {
        return (
            <div className="shop_page_nav d-flex flex-row">
                <div className="page_prev d-flex flex-column align-items-center justify-content-center"><i
                    className="fas fa-chevron-left"></i></div>
                <ul className="page_nav d-flex flex-row">
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">...</a></li>
                    <li><a href="#">21</a></li>
                </ul>
                <div className="page_next d-flex flex-column align-items-center justify-content-center"><i
                    className="fas fa-chevron-right"></i></div>
            </div>
        );
    }
}
export default Pagination