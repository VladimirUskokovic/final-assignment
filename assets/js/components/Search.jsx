import React, { Component }  from 'react';
import global from '../util/global';
import ApiMockUp from "../utilities/ApiMockUp";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggleCategory() {
        this.setState({active: !this.state.active});
    }

    render() {
        const categories = this.props.categories;
        return (
            <div className="header_search_content">
                <div className="header_search_form_container">
                    <form action="#" className="header_search_form clearfix">
                        <input type="search" required="required" className="header_search_input" placeholder="Search for products..."/>
                        <div className="custom_dropdown">
                            <div className="custom_dropdown_list">
                                <span className="custom_dropdown_placeholder clc" onClick={this.toggleCategory.bind(this)}>All Categories</span>
                                <i className="fas fa-chevron-down"></i>
                                <ul className={`custom_list clc ${this.state.active ? 'active' : ''}`}>
                                    {categories && categories.map(category => (
                                        <li key={category.categoryId}>
                                            <a className="clc" href="#">{category.categoryTitle}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button type="submit" className="header_search_button trans_300" value="Submit"><img src={`${global.PATH}/images/search.png`} alt=""/></button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search
