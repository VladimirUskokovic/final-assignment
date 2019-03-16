import React, { Component } from 'react';

class Parallax extends Component {
    render() {
        return (
            <div className="home">
                <div className="home_background parallax-window" data-parallax="scroll"
                     data-image-src="images/shop_background.jpg"></div>
                <div className="home_overlay"></div>
                <div className="home_content d-flex flex-column align-items-center justify-content-center">
                    <h2 className="home_title">Smartphones & Tablets</h2>
                </div>
            </div>
        );
    }
}
export default Parallax