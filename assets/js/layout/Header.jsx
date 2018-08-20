import React, { Component } from 'react';

import Navigation from '../components/Navigation.jsx';
import Search from '../components/Search.jsx';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="top_bar">
                    <div className="container">
                        <div className="row">
                            <div className="col d-flex flex-row">
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon"><img src="images/phone.png" alt=""/></div>
                                    +381 65 22 66 530 / +381 64 387 55 99
                                </div>
                                <div className="top_bar_contact_item">
                                    <div className="top_bar_icon"><img src="images/mail.png" alt=""/></div>
                                    <a href="aleksandar.atlagic.93.14@ict.edu.rs">aleksandar.atlagic.93.14@ict.edu.rs</a> /
                                    <a href="vladimir.uskokovic.324.13@ict.edu.rs"> vladimir.uskokovic.324.13@ict.edu.rs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-3 col-3">
                                <div className="logo_container">
                                    <div className="logo"><a href="#">CoTech</a></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 order-lg-2 order-3 text-lg-left text-right">
                                <div className="header_search">
                                    <Search/>
                                </div>
                            </div>
                            <div className="col-lg-4 col-9 order-lg-3 order-2 text-lg-left text-right">

                            </div>
                            <div className="menu_trigger_container ml-auto">
                                <div className="menu_trigger d-flex flex-row align-items-center justify-content-end">
                                    <div className="menu_burger">
                                        <div className="menu_trigger_text">menu</div>
                                        <div className="cat_burger menu_burger_inner">
                                            <span></span><span></span><span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="main_nav">
                    <Navigation/>
                </nav>
                <div className="page_menu">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="page_menu_content">
                                    <div className="page_menu_search">
                                        <form action="#">
                                            <input type="search" required="required" className="page_menu_search_input"
                                                   placeholder="Search for products..."/>
                                        </form>
                                    </div>
                                    <ul className="page_menu_nav">
                                        <li className="page_menu_item">
                                            <a href="#">Home<i className="fa fa-angle-down"></i></a>
                                        </li>
                                        <li className="page_menu_item has-children">
                                            <a href="#">Super Deals<i className="fa fa-angle-down"></i></a>
                                            <ul className="page_menu_selection">
                                                <li><a href="#">Super Deals<i className="fa fa-angle-down"></i></a></li>
                                                <li className="page_menu_item has-children">
                                                    <a href="#">Menu Item<i className="fa fa-angle-down"></i></a>
                                                    <ul className="page_menu_selection">
                                                        <li><a href="#">Menu Item<i
                                                            className="fa fa-angle-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i
                                                            className="fa fa-angle-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i
                                                            className="fa fa-angle-down"></i></a></li>
                                                        <li><a href="#">Menu Item<i
                                                            className="fa fa-angle-down"></i></a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            </ul>
                                        </li>

                                        <li className="page_menu_item has-children">
                                            <a href="#">Trending Styles<i className="fa fa-angle-down"></i></a>
                                            <ul className="page_menu_selection">
                                                <li><a href="#">Trending Styles<i className="fa fa-angle-down"></i></a>
                                                </li>
                                                <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                                <li><a href="#">Menu Item<i className="fa fa-angle-down"></i></a></li>
                                            </ul>
                                        </li>
                                        <li className="page_menu_item"><a href="blog.html">blog<i
                                            className="fa fa-angle-down"></i></a></li>
                                        <li className="page_menu_item"><a href="contact.html">contact<i
                                            className="fa fa-angle-down"></i></a></li>
                                    </ul>

                                    <div className="menu_contact">
                                        <div className="menu_contact_item">
                                            <div className="menu_contact_icon"><img src="images/phone_white.png" alt=""/>
                                            </div>
                                            +38 068 005 3570
                                        </div>
                                        <div className="menu_contact_item">
                                            <div className="menu_contact_icon"><img src="images/mail_white.png" alt=""/>
                                            </div>
                                            <a href="mailto:fastsales@gmail.com">fastsales@gmail.com</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header