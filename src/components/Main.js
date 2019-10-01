import React, { Component } from 'react';

import section1 from '../img/section1.png';
import intro1 from '../img/intro1.png';
import intro2 from '../img/intro2.png';
import intro3 from '../img/intro3.png';
import intro4 from '../img/intro4.png';
import element from '../img/element1.png';
import mainbg2 from '../img/main-bg2.png';




class Main extends Component {
  render() {
    return (
        <div className="App-main">
        <div className="row">
          <div className="col-6">
            <div className="main-introduction">Introduce Your Product Quickly & Effectively</div>
            <div className="main-text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
            <div>
              <button className="main-button" style={{ width: "190px", height: "30px", marginRight: "30px" }}>
                Purchase UI Kit
              </button>
              <button className="main-button-reverse" style={{ width: "190px", height: "30px" }}>
                Learn More
              </button>
            </div>
          </div>
          <div className="col-6">
            <img src={section1}></img>
          </div>
        </div>
        <div className="row" style={{ padding: "200px 0 100px 0" }}>
          <div className="col-6">
            <div className="section-title">Light, Fast & Powerful</div>
            <div className="main-text" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
            <div className="row">
              <div className="col-6">
                <img src={element}></img>
                <div style={{ color: "#091133", fontFamily: "Roboto", fontSize: "16px", fontWeight: "500", lineHeight: "26px" }}>Title Goes Here</div>
                <div style={{ color: "#5d6970", fontFamily: "Roboto", fontSize: "12px", fontWeight: 400, lineHeight: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
              </div>
              <div className="col-6">
                <img src={element}></img>
                <div style={{ color: "#091133", fontFamily: "Roboto", fontSize: "16px", fontWeight: "500", lineHeight: "26px" }}>Title Goes Here</div>
                <div style={{ color: "#5d6970", fontFamily: "Roboto", fontSize: "12px", fontWeight: 400, lineHeight: "18px" }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={intro1}></img>
          </div>
        </div>
        <div className="row" style={{ padding: "100px 0" }}>
          <div className="col-6">
            <img src={intro2}></img>
          </div>
          <div className="col-6">
            <div className="section-title">Light, Fast & Powerful</div>
            <div className="main-text" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: "100px 0" }}>
          <div className="col-6">
            <img src={intro3}></img>
          </div>
          <div className="col-6">
            <div className="section-title">Light, Fast & Powerful</div>
            <div className="main-text" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
          </div>
        </div>
        <div className="row" style={{ padding: "100px 0" }}>
          <div className="col-6">
            <img src={intro4}></img>
          </div>
          <div className="col-6">
            <div className="section-title">Light, Fast & Powerful</div>
            <div className="main-text" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
            </div>
            <button className="main-button" style={{ fontSize: "14px" }}>
              Get Started
            </button>
          </div>
        </div>
        <div className="row" style={{ position: "relative" }}>
          <img src={mainbg2} style={{ width: "100%" }}></img>
          <div className="price-section">
            <div className="section-title">A Price To Suit Everyone</div>
            <div className="main-text" style={{ fontSize: "16px" }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus
            </div>
            <div className="price-section-value">$40</div>
            <div className="price-section-kit">UI Design Kit</div>
            <div className="price-section-simple">See, One price. Simple.</div>
            <button className="main-button" style={{ fontSize: "14px", width: "189px" }}>
              View Pricing
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
