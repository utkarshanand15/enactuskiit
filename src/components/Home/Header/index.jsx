import './styles.css';
import React, { Component } from 'react'


class Header extends Component {
  render() {
      return (
        <header className='home-header'>
        <h2 style={{color:"#ffffff"}}>Our</h2>
        <h1 style={{color:"#ffbf00"}}>
          <span>“</span> {this.props.heading} <span>”</span>
        </h1>
        <p>
       {this.props.paragraph}<br></br>
        </p>
      </header>
      )
  }
}

export default Header;
