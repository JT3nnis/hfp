import React from "react";
import logo from "./doglogo.png";
import fblogo from "./fblogo.png";
import petfinderlogo from "./petfinderlogo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.facebook.com/heaven4pawz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fblogo} className="fblogo" alt="logo" />
        </a>
        <a
          className="App-link"
          href="https://www.petfinder.com/member/us/wa/kirkland/heaven-4-paws-wa554/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={petfinderlogo} className="petfinderlogo" alt="logo" />
        </a>
        <img src={logo} className="doglogo" alt="logo" />
        <p>
          Heaven 4 Paws
        </p>

        <div>
          <p>dogs</p>
        </div>
      </header>
    </div>
  );
}

export default App;
