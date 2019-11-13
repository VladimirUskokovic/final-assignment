import React, { Component, useContext } from 'react';
import Banner from "../components/Banner";
import Deals from "../components/Deals";
import Popular from "../components/Popular";
import Product from "../components/Product";
import ApiMockUp from "../utilities/ApiMockUp";

class Content extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const products = this.props.products;
        return (
            <div>
                <div className="banner">
                    <div className="banner_background" style={{ backgroundImage:'url(images/banner_background.jpg)' }}></div>
                    <Banner/>
                </div>
                <div className="deals_featured">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="featured">
                                    {products && products.map(product => (
                                        <Product title={product.title} category={product.category}
                                                 price={product.price} image={product.image}
                                                 key={product.productId} productId={product.productId}
                                                 store={product.store}/>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="popular_categories">
                    <Popular/>
                </div>
            </div>
        );
    }
}

export default Content;
