import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import CategoriesMain from "./CategoriesMain";
import ProductContext from "../AppContext";
import Header from "../layout/Header";

class Shop extends Component {

    render() {

        const { products, categories, category } = this.props;
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar categories={categories}/>
                        </div>
                        <div className="col-lg-9">
                            <CategoriesMain products={products} category={category} categories={categories} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Shop.contextType = ProductContext;
export default Shop
