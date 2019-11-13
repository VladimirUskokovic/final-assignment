import React, { Component } from "react";
import global from '../util/global';

class ProductLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 0,
      images: [
        `${global.PATH}/images/single_1.jpg`,
        `${global.PATH}/images/single_2.jpg`,
        `${global.PATH}/images/single_3.jpg`
      ]
    }
  }
  setModal(imageKey) {
    this.setState({ image: imageKey });
  }
  getImage() {
    return this.state.image;
  }
  render() {
    const { product } = this.props;

    if (!product) {
      return null;
    }

    let images = product.images.map((val, key) => <li onClick={() => {this.setModal(key)}} key={key}><img src={val} alt=""/></li>);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 order-lg-1 order-2">
              <ul className="image_list">
                {images.slice(0, 3)}
              </ul>
            </div>
            <div className="col-lg-5 order-lg-2 order-1">
              <div className="image_selected">
                <img src={product.images[this.state.image]}/>
                </div>
            </div>
            <div className="col-lg-5 order-3">
               <div className="product_description">
                 <div className="product_category">{product.category.name}</div>
                  <div className="product_name">{product.name}</div>
                  <div className="product_text">
                    <p>
                      {/*{product.store}*/}
                    </p>
                  </div>

                  {/*<div className="product_price">{product.price} din</div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLarge;
