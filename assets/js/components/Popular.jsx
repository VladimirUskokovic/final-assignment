import React, { Component } from 'react';

class Popular extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="popular_categories_content">
                            <div className="popular_categories_title">Popularne kategorije</div>
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
                                        <div className="popular_category_text">Mobilni telefoni i tableti</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_2.png" alt=""/></div>
                                        <div className="popular_category_text">Kompjuteri i laptopovi</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_3.png" alt=""/></div>
                                        <div className="popular_category_text">Uređaji</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_4.png" alt=""/></div>
                                        <div className="popular_category_text">Video igre i konzole</div>
                                    </div>
                                </div>
                                <div className="category-item">
                                    <div
                                        className="popular_category d-flex flex-column align-items-center justify-content-center">
                                        <div className="popular_category_image"><img src="images/popular_5.png" alt=""/></div>
                                        <div className="popular_category_text">Aksesoari</div>
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
