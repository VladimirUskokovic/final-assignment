import React, { Component } from 'react';
import global from '../util/global';
import { NavLink } from 'react-router-dom';

class Product extends Component {

  render() {
      const offers = this.props.offers;
      const minPrice = offers[0];
      const maxPrice = offers[offers.length-1];

      function addDefaultSrc(ev){
          ev.target.src = '/images/Placeholder.jpg';
      }
      return (
          <div className="product_item discount d-flex flex-column align-items-center justify-content-center text-center">
            <div className="product_image d-flex flex-column align-items-center justify-content-center">
                <img onError={addDefaultSrc} src={this.props.image ? this.props.image : '/images/Placeholder.jpg'} alt=""/>
            </div>
            <div className="product_content">

              <div className="product_name">
                <div>
                    {this.props.title ? (
                      <NavLink to={`${global.PATH}/client/product/${this.props.productId}`}>
                        { this.props.title }
                      </NavLink>
                    ) : (
                        <NavLink to={`${global.PATH}/client/product/${this.props.productId}`}>
                            Nema informacija o nazivu
                        </NavLink>
                    )
                    }
                </div>
              </div>
                { maxPrice.price !== '0.00' ? (
                    <div className="product_price discount">od { minPrice.price } din. do { maxPrice.price } din.</div>
                ) : (
                    <div className="product_price discount"> Nema informacija o ceni </div>
                )
                }
              <div className="product_extras">
                <a className="product_cart_button" href={`${global.PATH}/client/product/${this.props.productId}`}>Uporedite cene</a>
              </div>
            </div>
          </div>
        );
    }
}

export default Product
