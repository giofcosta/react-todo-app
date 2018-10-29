import React, { Component } from "react";
import "./App.css";
import "typeface-roboto";
import "@material-ui/icons";
import Menu from "./template/menu";
import Routes from './routes'
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu />
        <Routes />
      </React.Fragment>
    );
  }
}

export default App;
