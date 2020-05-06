import React from "react";
//import logo from "./logo.svg";
import './App.css'
import CardList from "./components/card-list/card-list.component.jsx";


class App extends React.Component {
  state = {
    monsters: [],
    SearchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {

    const { monsters, SearchField} = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
      ) 
    return (
      <div className="App">
        <input 
        type="search"
        placeholder="Search" 
        onChange={e => {
          this.setState({ SearchField: e.target.value });
        }}/>
        <CardList monsters={filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
