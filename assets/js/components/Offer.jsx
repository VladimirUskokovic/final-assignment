import global from "../util/global";
import React, { Component }  from "react";
class Offer extends Component {
    render() {

        const { offer } = this.props;
        console.log(offer.updatedAt);
        return(
            <li className="cart_item clearfix">
                <div className="cart_item_image"><img src={offer.image} alt=""/></div>
                <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
                    <div className="cart_item_seller cart_info_col">
                        <div className="cart_item_title">Prodavnica</div>
                        <div className="cart_item_text">{offer.seller.name}</div>
                    </div>
                    <div className="cart_item_color cart_info_col">
                        {/*<div className="cart_item_title">{offer.availability ? 'Na stanju' : 'Nije na stanju'}</div>*/}
                        <div className="cart_item_text"><span style={{backgroundColor:'#00990b'}}></span>{this.props.color}
                        </div>
                    </div>

                    <div className="cart_item_price cart_info_col">
                        <div className="cart_item_title">Cena</div>
                        <div className="cart_item_text">{offer.price} din.</div>
                    </div>
                    <div className="cart_item_update cart_info_col">
                        <div className="cart_item_title">Azurirano</div>
                        {/*<div className="cart_item_text">{offer.updatedAt}</div>*/}
                    </div>
                    <div className="cart_item_button cart_info_col">
                        <a target={'_blank'} href={offer.link} className="button cart_button_checkout">Posetite prodavnicu</a>
                    </div>

                </div>
            </li>
        );
    }
}

export default Offer
