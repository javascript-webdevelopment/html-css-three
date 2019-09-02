import React, { Component } from 'react'

// Style Sheet
import './Navbar.css';

export default class Navbar extends Component {


    render() {
        return (
            <nav className="navbar">
                <h1 className="navbar-title">Start Bootstrap</h1>
                <div className="navbar-icon">
                    &#9776;
                </div>
                <div className="navbar-menu">
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </nav>
        )
    }
};