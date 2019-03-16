import React, { Component } from "react";
import ProductLarge from "../components/ProductLarge";
import ProductList from "../components/ProductList";

class ProductContent extends Component {
    render() {
        return (
            <div>
                <div className="single_product">
                    <ProductLarge />
                </div>
                <div className="cart_section">
                    <ProductList />
                </div>
            </div>
        );
    }
}

export default ProductContent