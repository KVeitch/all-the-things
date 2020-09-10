import React, { Component } from "react";
import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import ListContainer from "../components/ListContainer/ListContainer";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
  }

  createCard = (card) => {
    this.setState({ lists: [...this.state.lists, card] });
  };

  removeCard = (event) => {
    if (event.key === "Delete" || event.key === "Backspace") {
      const index = event.target.dataset.index;
      const results = this.state.lists.filter((list, i) => i != index);
      this.setState({
        lists: results,
      });
    }
  };

  render() {
    return (
      <div className="full-container">
        <div className="App">
          <Header />
          <Form createCard={this.createCard} />
          <ListContainer
            lists={this.state.lists}
            removeCard={this.removeCard}
          />
        </div>
      </div>
    );
  }
}

export default App;
