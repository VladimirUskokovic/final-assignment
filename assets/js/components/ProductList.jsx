import React, { Component } from "react";
import Offer from "./Offer";

class ProductList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { offers } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="cart_container">
                            <div className="cart_title">Compare prices</div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {offers.map(offer => (
                                        <Offer name={offer.name} price={offer.price} seller={offer.seller} color={offer.color} image={offer.image} key={offer.id}/>
                                    ))}
                                </ul>
                            </div>
                            <div className="cart_buttons">
                                {/*<button type="button" className="button cart_button_clear">Add to Cart</button>*/}
                                <button type="button" className="button cart_button_checkout">Visit store</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList
