import React from 'react';
import './App.css';
import Digimon from './Digimon';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { searchDigimon: '', isFetching: false, errorMessage: '' };
  }

  inputValue = (value) => {
    this.setState((state) => ({
      ...state,
      searchDigimon: value,
    }));
  }

  requestDigimon = async () => {
    const { searchDigimon } = this.state;
    if (searchDigimon) {
      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`)
        .then((res) => res.json())
        .then((results) => this.setState((state) => ({
          ...state,
          digimon: results[0],
          errorMessage: results["ErrorMsg"],
          isFetching: true,
        })));
    }
  }

  render() {
    const { digimon, searchDigimon, isFetching, errorMessage } = this.state;
    return (
      <div className="App">
        <input
          data-testid="input"
          type="text"
          value={searchDigimon}
          onChange={({ target }) => this.inputValue(target.value)}
        />
        <button
          data-testid="buttonSearch"
          type="button"
          onClick={this.requestDigimon}
        >
          Search Digimon
        </button>
        { isFetching && !errorMessage
          ? <Digimon digimon={digimon} />
          : <h1>{errorMessage || 'Faça uma pesquisa'}</h1>
        }
      </div>
    );
  }
}
