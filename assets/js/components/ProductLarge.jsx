import React, { Component } from "react";

class ProductLarge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "images/single_1.jpg",
            images: [
                "images/single_1.jpg",
                "images/single_2.jpg",
                "images/single_3.jpg"
            ]
        }
    }
    setModal(imageKey) {
        this.setState({ image: this.state.images[imageKey] });
    }
    getImage() {
        return this.state.image;
    }
    render() {
        let images = this.state.images.map((val, key) => {
            return <li onClick={() => {this.setModal(key)}} key={key}><img src={val} alt=""/></li>
        });
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-2 order-lg-1 order-2">
                        <ul className="image_list">
                            {images}
                        </ul>
                    </div>
                    <div className="col-lg-5 order-lg-2 order-1">
                        <div className="image_selected">
                            <img src={this.state.image}></img>
                        </div>
                    </div>
                    <div className="col-lg-5 order-3">
                        <div className="product_description">
                            <div className="product_category">Laptops</div>
                            <div className="product_name">MacBook Air 13</div>
                            <div className="rating_r rating_r_4 product_rating"><i></i><i></i><i></i><i></i><i></i>
                            </div>
                            <div className="product_text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Maecenas fermentum. laoreet turpis, nec sollicitudin dolor cursus at. Maecenas
                                aliquet, dolor a faucibus efficitur, nisi tellus cursus urna, eget dictum lacus
                                turpis.</p></div>

                            <div className="product_price">$2000 - $2150</div>
                        </div>
                    </div>
                </div>
            </div></div>
        );
    }
}

export default ProductLarge