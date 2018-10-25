import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import "@material-ui/icons";

import Todo from "./todo/todo";
import About from "./about/about";
import Menu from "./template/menu";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Todo />
        <About />
      </React.Fragment>
    );
  }
}

export default App;
