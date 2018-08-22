import React, { Component } from 'react';
import CategoriesBar from './CategoriesBar';
import CategoriesGrid from "./CategoriesGrid";
import Pagination from "./Pagination";

class CategoriesMain extends Component {
    render() {
        return (
            <div className="shop_content">
                <div>
                    <CategoriesBar />
                </div>
                <div>
                    <CategoriesGrid />
                </div>
                <div>
                    <Pagination />
                </div>
            </div>
        );
    }
}
export default CategoriesMain