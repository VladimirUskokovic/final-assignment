import React, { Component } from 'react';
import AppContext from "../AppContext";
import CategoriesGrid from "./CategoriesGrid";

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
    }
    loadMore () {

        if (typeof this.props.load === 'function') {
            this.props.load();
        }
    }
        render() {
        const { products, visible } = this.props;

        return (
            <div className="shop_page_nav d-flex flex-row">
                <div>{visible < products.length &&
                <button onClick={this.loadMore} type="button" className="button product_cart_button load-more">Učitajte još ...</button>
                }</div>
            </div>
        );
    }
}

export default Pagination
