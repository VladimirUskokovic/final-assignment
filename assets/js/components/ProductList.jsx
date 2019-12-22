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
                                    {offers.map((offer, index) => (
                                        <Offer key={index} offer={offer}/>
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
