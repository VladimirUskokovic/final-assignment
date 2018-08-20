import React, { Component } from 'react';
import Banner from "../components/Banner";
import Deals from "../components/Deals";
import Popular from "../components/Popular";

class Content extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="banner_background" style={{ backgroundImage:'url(images/banner_background.jpg)' }}></div>
                    <Banner/>
                </div>
                <div className="deals_featured">
                    <Deals/>
                </div>
                <div className="popular_categories">
                    <Popular/>
                </div>
            </div>
        );
    }
}

export default Content