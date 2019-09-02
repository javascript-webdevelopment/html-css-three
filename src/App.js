import React, { Component } from 'react'

// Components
import Navbar from './components/Navbar/Navbar';

// Style Sheets
import 'reset-css';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* Navbar */}
        <Navbar />
      </div>
    )
  }
};