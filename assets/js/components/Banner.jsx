import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className="container fill_height">
                <div className="row fill_height">
                    <div className="banner_product_image"><img src="images/pricecheck.png" alt=""/></div>
                    <div className="col-lg-5 offset-lg-4 fill_height">
                        <div className="banner_content">
                            <h1 className="banner_text">Welcome to the best place for comparison prices of tech products on our market</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Banner