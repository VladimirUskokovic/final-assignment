import React, { Component } from 'react';
import Header from '../layout/Header.jsx';
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Copyright from "../layout/Copyright";
import ProductContext from "../ProductContext";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }


    render() {
        function renderPage({products}) {
            return (
                <div className="super_container">
                    {/*<div><Header/></div>*/}
                        <Content products={products}/>
                    {/*<div><Footer/></div>*/}
                    {/*<div><Copyright/></div>*/}
                </div>
            );
        }

        return (
            <ProductContext.Consumer>
                {(contextState ) => renderPage(contextState)}
            </ProductContext.Consumer>
        );

    }
}

export default Home
