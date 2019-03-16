import React, { Component } from 'react';

class Popular extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="popular_categories_content">
                            <div className="popular_categories_title">Popular Categories</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="popular_categories_slider_container">
                            <div className="popular_categories_slider">
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_1.png" alt=""/></div>
                                        <div className="popular_category_text">Smartphones & Tablets</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_2.png" alt=""/></div>
                                        <div className="popular_category_text">Computers & Laptops</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_3.png" alt=""/></div>
                                        <div className="popular_category_text">Gadgets</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_4.png" alt=""/></div>
                                        <div className="popular_category_text">Video Games & Consoles</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_5.png" alt=""/></div>
                                        <div className="popular_category_text">Accessories</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Popular