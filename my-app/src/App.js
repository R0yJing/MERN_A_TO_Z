import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";
class Class extends React.Component {
  constructor() {
    super();
    this.state = {
      another: "initialised",
    };
  }
  render() {
    return (
      <h1>
        {" "}
        Hello, {this.props.name}, {this.state.another}{" "}
      </h1>
    );
  }
}
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Class name={"Roy"} />
          <Route exact path="/" component={ShowBookList} />
          <Route path="/create-book" component={CreateBook} />
          <Route path="/edit-book/:id" component={UpdateBookInfo} />
          <Route path="/show-book/:id" component={ShowBookDetails} />
        </div>
      </Router>
    );
  }
}

export default App;
