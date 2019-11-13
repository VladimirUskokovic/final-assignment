import React, { Component }  from 'react';
import global from '../util/global';
import ApiMockUp from "../utilities/ApiMockUp";
import AppContext from "../AppContext";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            searchValue: '',
            products: [],
        };

        this.handleOnChange= this.handleOnChange.bind(this);
        this.handleSearch= this.handleSearch.bind(this);
    }

    handleOnChange(event) {
        this.setState({ searchValue: event.target.value });
    };
    handleSearch() {
        const { search } = this.context;
        search(this.state.searchValue);
    };

    render() {
        return (
            <div className="header_search_content">
                <div className="header_search_form_container">
                    <form action="#" className="header_search_form clearfix">
                        <input type="search" required="required"
                               className="header_search_input"
                               placeholder="Pretraga proizvoda..."
                               value={this.state.searchValue}
                               onChange={event => this.handleOnChange(event)}/>
                        <button type="submit"
                                className="header_search_button trans_300"
                                value="Submit"
                                onClick={this.handleSearch}>
                            <img src={`${global.PATH}/images/search.png`} alt=""/>
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}
Search.contextType = AppContext;
export default Search;
