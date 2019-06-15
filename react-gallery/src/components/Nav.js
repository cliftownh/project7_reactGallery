import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

    handleClick = (e) => {
        let searchTerm = e.currentTarget.textContent;
        this.props.onClick(searchTerm);
    }

    render() {
        return (
            <nav className="main-nav">
                <ul>
                <li><NavLink to="/results/cats" onClick={this.handleClick}>Cats</NavLink></li>
                <li><NavLink to="/results/dogs" onClick={this.handleClick}>Dogs</NavLink></li>
                <li><NavLink to="/results/whales" onClick={this.handleClick}>Whales</NavLink></li>
                </ul>
            </nav>
        );
    }
}