import React, { Component } from 'react';
import ProductContent from "../layout/ProductContent";
import ProductContext from "../AppContext";

class SingleProduct extends Component {
    componentDidMount () {
        const { getProduct } = this.context;

        const productId = parseInt(this.props.match.params.id);
        getProduct(productId);
    }

    render() {
        const { product } = this.context;

        return (
            <div className="super_container">
                <div>
                    <ProductContent product={product} offers={product ? product.offers : []}/>
                </div>
            </div>
        );
    }
}

SingleProduct.contextType = ProductContext;
export default SingleProduct;
