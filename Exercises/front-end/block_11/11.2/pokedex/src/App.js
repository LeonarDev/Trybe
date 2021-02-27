import React from 'react';
import './App.css';
import Header from './Components/Header';
import Pokedex from './Components/Pokedex';
import pokemons from './data';

class App extends React.Component {
  render() {
    return (
      <section className="App">
        <Header />
        <Pokedex pokemons={ pokemons } />
      </section>
    );
  }
}

export default App;
