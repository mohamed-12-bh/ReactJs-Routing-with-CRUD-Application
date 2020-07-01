import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import NotFound from "./Components/pages/NotFound";
import NavBar from "./Components/NavBar";
import AddUser from "./Components/AddUser";
import Users from "./Components/pages/Users";

import "./App.css";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/users/:id" component={Users} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
