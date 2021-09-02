import React, { Component } from 'react';

import './SearchBar.css';

class SearchBar extends Component {

    state = {
        term: ''
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="search-bar">
                <form className="search-bar__form" onSubmit={this.onFormSubmit}>
                    <label>{this.props.label}</label>
                    <input type="text" value={this.state.term} placeholder="Search.." onChange={e => this.setState({ term: e.target.value })} />
                </form>
            </div>
        )
    }
}


export default SearchBar;