import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight, image } = pokemon;
    // moreInfo

    return (
      <section>
        <h3>{ name }</h3>
        <h3>{ type }</h3>
        <h3>{ (averageWeight.value).toFixed(1) + averageWeight.measurementUnit }</h3>
        <img src={ image } />
      </section>
    )
  }
}

export default Pokemon;
