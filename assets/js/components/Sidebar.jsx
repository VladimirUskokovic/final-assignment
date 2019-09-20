import React, { Component } from 'react';
import Offer from "./ProductList";
import global from "../util/global";
import {NavLink} from "react-router-dom";

class Sidebar extends Component {

    render() {
        const { categories } = this.props;
        const { brands } = this.props;
        return (
            <div className="shop_sidebar">
                <div className="sidebar_section">
                    <div className="sidebar_title">Kategorije</div>
                    <ul className="sidebar_categories">
                        {categories && categories.map(category => (
                            <li key={category.categoryId}>
                                <NavLink to={`${global.PATH}/client/category/${category.categoryId}`}>
                                    {category.categoryTitle}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="sidebar_section">
                    <div className="sidebar_subtitle brands_subtitle">Brands</div>
                    <ul className="brands_list">
                        {brands && brands.map(brand => (
                            <li className="brand" key={brand.brandId}>
                                <input type="checkbox" id={brand.brandId} name={brand.brandId}/>
                                    <label htmlFor={brand.brandName}>{brand.brandName}</label>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Sidebar
