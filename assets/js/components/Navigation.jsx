import React, { Component }  from 'react';

import Search from "./Search";
import global from "../util/global";
import {NavLink} from "react-router-dom";

class Navigation extends Component {

    render() {
        const { categories } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="main_nav_content d-flex">
                            <div className="logo_container">
                                <div className="logo"><a href="#">CoTech</a></div>
                            </div>
                            <div className="cat_menu_container">
                                <div
                                    className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                    <div className="cat_burger">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="cat_menu_text">
                                        Kategorije
                                    </div>
                                </div>
                                <ul className="cat_menu">
                                {categories && categories.map(category => (
                                    <li key={category.categoryId}>
                                        <NavLink to={`${global.PATH}/client/category/${category.categoryId}`}>
                                            {category.categoryTitle}
                                        </NavLink>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="col-lg-4 col-6 order-lg-2 order-3 text-lg-left text-right align-left">
                                <Search/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation
