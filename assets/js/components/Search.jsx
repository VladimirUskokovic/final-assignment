import React, { Component }  from 'react';
import MainNav from "./MainNav";

class Search extends Component {
    render() {
        return (
            <div className="header_search_content">
                <div className="header_search_form_container">
                    <form action="#" className="header_search_form clearfix">
                        <input type="search" required="required" className="header_search_input" placeholder="Search for products..."/>
                        <div className="custom_dropdown">
                            <div className="custom_dropdown_list">
                                <span className="custom_dropdown_placeholder clc">All Categories</span>
                                <i className="fas fa-chevron-down"></i>
                                <ul className="custom_list clc">
                                    <li><a className="clc" href="#">All Categories</a></li>
                                    <li><a className="clc" href="#">Computers</a></li>
                                    <li><a className="clc" href="#">Laptops</a></li>
                                    <li><a className="clc" href="#">Cameras</a></li>
                                    <li><a className="clc" href="#">Hardware</a></li>
                                    <li><a className="clc" href="#">Smartphones</a></li>
                                </ul>
                            </div>
                        </div>
                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src="images/search.png" alt=""/></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search