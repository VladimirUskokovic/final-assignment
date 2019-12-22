import React, { Component } from 'react';
import Copyright from "./Copyright";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 footer_col">
                            <div className="footer_column footer_contact">
                                <div className="logo_container">
                                    <div className="logo"><a href="#">CoTech</a></div>
                                </div>
                                <div className="footer_title">Imate pitanja? Stojimo Vam na raspolaganju</div>
                                <div className="footer_phone">+381 65 22 66 530 <br/> +381 64 387 55 99</div>
                                <div className="footer_contact_text">
                                    <p>Beograd, Srbija</p>
                                </div>
                                <div className="footer_social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i className="fab fa-google"></i></a></li>
                                        <li><a href="#"><i className="fab fa-vimeo-v"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 offset-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Brzi linkovi</div>
                                <ul className="footer_list">
                                    <li><a href="#">Computers & Laptops</a></li>
                                    <li><a href="#">Cameras & Photos</a></li>
                                    <li><a href="#">Hardware</a></li>
                                    <li><a href="#">Smartphones & Tablets</a></li>
                                    <li><a href="#">TV & Audio</a></li>
                                </ul>
                                <div className="footer_subtitle">Gadgets</div>
                                <ul className="footer_list">
                                    <li><a href="#">Car Electronics</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_column">
                                <ul className="footer_list footer_list_2">
                                    <li><a href="#">Video Games & Consoles</a></li>
                                    <li><a href="#">Accessories</a></li>
                                    <li><a href="#">Cameras & Photos</a></li>
                                    <li><a href="#">Hardware</a></li>
                                    <li><a href="#">Computers & Laptops</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="footer_column">
                                <div className="footer_title">Cesto postavljana pitanja</div>
                                <ul className="footer_list">
                                    <li><a href="#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer
