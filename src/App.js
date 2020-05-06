import React from "react";
//import logo from "./logo.svg";
import './App.css'
import CardList from "./components/card-list/card-list.component.jsx";


class App extends React.Component {
  state = {
    monsters: [
      {
        name: "Frankenstein",
        id: "fdasfd",
      },
      {
        name: "Dracula",
        id: "fdsaggf",
      },
      {
        name: "Zombie",
        id: "jhiojo",
      },
    ],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
       
          
        </CardList>
      </div>
    );
  }
}

export default App;
