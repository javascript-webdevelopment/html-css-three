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
      <div>
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

      </div>
    )
  }
};