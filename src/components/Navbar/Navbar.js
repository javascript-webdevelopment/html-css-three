import React, { Component } from 'react'

// Style Sheet
import './Navbar.css';

export default class Navbar extends Component {
    constructor(){
        super()

        this.state = {
            menu: false
        }
    }

    slide = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div>
                {/* Navbar */}
                <nav className="navbar">
                    <h1 className="navbar-title">Start Bootstrap</h1>
                    <div className="navbar-icon" onClick={this.slide}>
                        &#9776;
                    </div>
                    <div className="navbar-menu">
                        <a href="#">Home</a>
                        <a href="#">About</a>
                        <a href="#">Services</a>
                        <a href="#">Contact</a>
                    </div>
                </nav>

                {/* Slide Out Menu */}
                <div className={
                    this.state.menu ?
                    'menu slide'
                    :
                    'menu'
                }>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Contact</a>
                </div>
            </div>
        )
    }
};