import React, { Component } from 'react';

class CategoriesProduct extends Component {
    render() {
        return (
            <div className="product_item">
                <div className="product_border"></div>
                <div className="product_image d-flex flex-column align-items-center justify-content-center"><img
                    src="images/featured_2.png" alt=""/></div>
                <div className="product_content">
                    <div className="product_price">$379</div>
                    <div className="product_name">
                        <div><a href="#" tabIndex="0">Apple iPod shuffle</a></div>
                    </div>
                </div>
                <div className="product_fav"><i className="fas fa-heart"></i></div>
                <ul className="product_marks">
                    <li className="product_mark product_discount">-25%</li>
                    <li className="product_mark product_new">new</li>
                </ul>
            </div>
        );
    }
}
export default CategoriesProduct