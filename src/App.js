import React from "react";
import "./App.css";
import mainbg1 from "./img/main-bg1.png";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <img className="App-bg" src={mainbg1}></img>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
