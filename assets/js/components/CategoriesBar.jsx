import React, { Component } from 'react';

class CategoriesMain extends Component {
    render() {
        return (
            <div className="shop_bar clearfix">
                <div className="shop_product_count"><span>186</span> products found</div>
                <div className="shop_sorting">
                    <span>Sort by:</span>
                    <ul>
                        <li>
                            <span className="sorting_text">highest rated<i className="fas fa-chevron-down"></i></span>
                            <ul>
                                <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "original-order" }'>highest rated</li>
                                <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "name" }'>name</li>
                                <li className="shop_sorting_button" data-isotope-option='{ "sortBy": "price" }'>price</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default CategoriesMain