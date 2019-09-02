import React, { Component } from 'react'

// Components
import Navbar from './components/Navbar/Navbar';

// Style Sheets
import 'reset-css';
import './App.css';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      spinning: false
    };

  };

  animate = () => {
    this.setState({
      spinning: !this.state.spinning
    })
  };

  render() {
    return (
      <div className="app-container">
        {/* Navbar */}
        <Navbar />

        {/* Square */}
        <div className={
          this.state.spinning ?
          'square square-spin'
          :
          'square'} 
          onClick={this.animate}></div>

        {/* Beating Heart */}
        <div className="heart"></div>

        {/* Transition Square to Circle */}
        <div className="transition-circle"></div>
        
      </div>
    )
  }
};