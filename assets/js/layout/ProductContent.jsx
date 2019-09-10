import React, { Component } from "react";
import ProductLarge from "../components/ProductLarge";
import ProductList from "../components/ProductList";
import ApiMockUp from "../utilities/ApiMockUp";

class ProductContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const apiMockUp = new ApiMockUp();
        const product = apiMockUp.products;
        const { offers } = this.props;
        return (
            <div>
                <div className="single_product">
                    <ProductLarge productId={product.productId}/>
                </div>
                <div className="cart_section">
                    <ProductList offers={offers}/>
                </div>
            </div>
        );
    }
}

export default ProductContent
