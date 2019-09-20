import React, { Component } from "react";
import global from '../util/global';

class ProductLarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: `${global.PATH}/images/single_1.jpg`,
      images: [
        `${global.PATH}/images/single_1.jpg`,
        `${global.PATH}/images/single_2.jpg`,
        `${global.PATH}/images/single_3.jpg`
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
    const { product } = this.props;

    if (!product) {
      return null;
    }

    let images = this.state.images.map((val, key) => <li onClick={() => {this.setModal(key)}} key={key}><img src={val} alt=""/></li>);

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
                <img src={product.image}/>
                </div>
            </div>
            <div className="col-lg-5 order-3">
               <div className="product_description">
                 <div className="product_category">{product.category}</div>
                  <div className="product_name">{product.title}</div>
                  <div className="product_text">
                    <p>
                      {product.store}
                    </p>
                  </div>

                  <div className="product_price">{product.price} din</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLarge;
