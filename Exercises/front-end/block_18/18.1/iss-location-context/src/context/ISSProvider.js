import React from 'react';
import ISSContext from './ISSContext';
import { getCurrentISSLocation } from '../services/issAPI';

class ISSProvider extends React.Component {
  constructor() {
    super();

    this.state = {
      latitude: 10,
      longitude: 10,
      error: null,
      isFetching: false,
    };

    this.fetchISSLocation = this.fetchISSLocation.bind(this);
  }

  fetchISSLocation() {
    // seta isFetching pra true
    // fazer a requisicao
    // armazenar o resultado no context

    this.setState({ isFetching: true }, async () => {
      const { iss_position: { latitude, longitude } } = await getCurrentISSLocation();
      this.setState({
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
        isFetching: false,
      });
    });
  }

  render() {
    const { children } = this.props;
    return (
      <ISSContext.Provider
        value={ { ...this.state, fetchISSLocation: this.fetchISSLocation } }
      >
        {children}
      </ISSContext.Provider>
    );
  }
}

export default ISSProvider;
