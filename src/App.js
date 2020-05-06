import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component.jsx";
import "./components/card-list/"

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
        <CardList name="Brian" />
        <h1>Me</h1>
        {this.state.monsters.map((monster) => (
          <h1 key={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
