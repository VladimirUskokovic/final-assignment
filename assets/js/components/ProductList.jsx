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
                            <div className="cart_title">Uporedite cene</div>
                            <div className="cart_items">
                                <ul className="cart_list">
                                    {offers.map(offer => (
                                        <Offer name={offer.offerName} price={offer.price} seller={offer.store}
                                               color={offer.color} image={offer.image} key={offer.offerId}/>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList
