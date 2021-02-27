import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    const { pokemons } = this.props;

    return (
      <section>
        { pokemons.map(pokemon => 
          <Pokemon pokemon={ pokemon } />
        ) }
      </section>
    )
  }
}

export default Pokedex;
