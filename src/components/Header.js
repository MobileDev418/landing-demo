import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
        <header className="App-header">
        <nav>
          <ul className="App-links">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="App-title">Landie</div>
        <button className="App-button App-buy">Buy Now</button>
      </header>
    );
  }
}

export default Header;
