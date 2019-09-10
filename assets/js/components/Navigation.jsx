import React, { Component }  from 'react';

import Categories from "./Categories";
import MainNav from "./MainNav";
import Product from "../layout/Content";
import ApiMockUp from "../utilities/ApiMockUp";

class Navigation extends Component {

    render() {
        const categories = this.props.categories;
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="main_nav_content d-flex flex-row">
                            {/*<Categories/>*/}
                            <div className="cat_menu_container">
                                <div
                                    className="cat_menu_title d-flex flex-row align-items-center justify-content-start">
                                    <div className="cat_burger">
                                        <span></span><span></span><span></span>
                                    </div>
                                    <div className="cat_menu_text">
                                        categories
                                    </div>
                                </div>
                                <ul className="cat_menu">
                                {categories && categories.map(category => (
                                    <li key={category.categoryId}>
                                        <a href="#">{category.categoryTitle}
                                            <i className="fas fa-chevron-right ml-auto"></i>
                                        </a>
                                    </li>
                                ))}
                                </ul>
                            </div>
                            <div className="main_nav_menu ml-auto">
                                <MainNav/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navigation
