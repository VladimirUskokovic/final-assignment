import React, { Component }  from 'react';

class Categories extends Component {
    render() {
        return (
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
                    <li>
                        <a href="#">Computers & Laptops
                            <i className="fas fa-chevron-right ml-auto"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">Cameras & Photos
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li className="hassubs">
                        <a href="#">Hardware
                            <i className="fas fa-chevron-right"></i>
                        </a>
                        <ul>
                            <li className="hassubs">
                                <a href="#">Menu Item
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="#">Menu Item
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Menu Item
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Menu Item
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">Menu Item
                                            <i className="fas fa-chevron-right"></i>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Menu Item
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">Menu Item
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">Menu Item
                                    <i className="fas fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Smartphones & Tablets
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">TV & Audio
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">Gadgets
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">Car Electronics
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">Video Games & Consoles
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">Accessories
                            <i className="fas fa-chevron-right"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Categories