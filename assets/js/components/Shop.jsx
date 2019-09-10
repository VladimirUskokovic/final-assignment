import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import CategoriesMain from "./CategoriesMain";

class Shop extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products } = this.props;
        const { categories } = this.props;
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar categories={categories}/>
                        </div>
                        <div className="col-lg-9">
                            <CategoriesMain />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Shop
