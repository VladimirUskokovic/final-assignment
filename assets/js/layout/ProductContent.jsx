import React, { Component } from "react";
import ProductLarge from "../components/ProductLarge";
import ProductList from "../components/ProductList";
import ApiMockUp from "../utilities/ApiMockUp";
import Specifications from "../components/Specifications";

class ProductContent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { product, offers } = this.props;

        console.log(product);

        return (
            <div>
                <div className="single_product">
                    <ProductLarge product={product}/>
                </div>
                <div>
                    <Specifications specifications={product ? product.specifications : []}/>
                </div>

                <div className="cart_section">
                    <ProductList offers={offers}/>
                </div>
            </div>
        );
    }
}

export default ProductContent
