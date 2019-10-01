import React, { Component } from 'react';
import instagram from '../img/Instagram.svg';
import facebook from '../img/facebook.svg';
import linkdin from '../img/linkdin.svg';
import youtub from '../img/youtub.svg';
import twitter from '../img/twitter.svg';


class Footer extends Component {
  render() {
    return (
        <footer className="App-footer">
        <div className="App-footer-top">
          <span className="footer-span">©2019 UIX</span>
          <div className="App-title">Landie</div>
          <button className="App-button footer-button">Get Started</button>
        </div>
        <div className="App-footer-bottom">
          <nav>
            <ul className="App-links">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
          <div className="footer-icons">
            <img src={facebook}></img>
            <img src={linkdin}></img>
            <img src={twitter}></img>
            <img src={youtub}></img>
            <img src={instagram}></img>
          </div>
        </div>
      </footer>      
    );
  }
}

export default Footer;
