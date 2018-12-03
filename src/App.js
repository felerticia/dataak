import React, { Component } from "react";
import "./Styles/style.scss";

import Navbar from "./Components/Navbar";

//https://api.myjson.com/bins/18rd4y
//Detail.text

//News
//https://api.myjson.com/bins/xg4n6

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
      </div>
    );
  }
}

export default App;
