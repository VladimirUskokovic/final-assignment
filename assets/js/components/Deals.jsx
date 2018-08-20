import React, { Component }  from 'react';
import MainDeal from "./MainDeal";
import Product from "./Product";

class Deals extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex flex-lg-row flex-column align-items-center justify-content-start">
                            <div className="deals">
                                <div className="deals_title">Deals of the Week</div>
                                <MainDeal/>
                            </div>
                            <div className="featured">
                                <div className="tabbed_container">
                                    <div className="tabs">
                                        <ul className="clearfix">
                                            <li className="active">Featured</li>
                                      </ul>
                                        <div className="tabs_line"><span></span></div>
                                    </div>
                                    <div className="product_panel panel active">
                                        <div className="featured_slider slider">
                                            <div className="featured_slider_item">
                                                <div className="border_active"></div>
                                                <Product/>
                                            </div>
                                        </div>
                                        <div className="featured_slider_dots_cover"></div>
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

export default Deals