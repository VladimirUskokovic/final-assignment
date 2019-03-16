import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
                <div className="product_image d-flex flex-column align-items-center justify-content-center">
                    <img src="images/featured_1.png" alt=""/></div>
                <div className="product_content">
                    <div className="product_price discount">$225 - $300</div>
                    <div className="product_name">
                        <div><a href="product.html">Huawei MediaPad...</a></div>
                    </div>
                    <div className="product_extras">
                        <button className="product_cart_button">Check Prices</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product