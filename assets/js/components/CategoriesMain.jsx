import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import CategoriesGrid from "./CategoriesGrid";
import Pagination from "./Pagination";
import AppContext from "../AppContext";

class CategoriesMain extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { products } = this.props;
        const { category } = this.props;
        return (

            <div className="shop_content">
                <div>
                    <CategoriesBar products={products} category={category}/>
                </div>
                <div>
                    <CategoriesGrid products={products} visible={this.context.visible}/>
                </div>
                <div>
                    <Pagination products={products} visible={this.context.visible} load={this.context.loadMore}/>
                </div>
            </div>
        );
    }
}

CategoriesMain.contextType = AppContext;
export default CategoriesMain
