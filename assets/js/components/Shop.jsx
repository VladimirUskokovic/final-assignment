import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import CategoriesMain from "./CategoriesMain";

class Shop extends Component {
    render() {
        return (
            <div className="shop">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Sidebar/>
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