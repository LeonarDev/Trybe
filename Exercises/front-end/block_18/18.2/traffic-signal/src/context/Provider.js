import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [signal, setColor] = useState({ color: 'red' });

  const changeSignal = (signalColor) => {
    setColor({ color: signalColor });
  };

  const context = { signal, changeSignal };

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export default Provider;






{/*
class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
      signal: {
        color: 'red',
      },
    }
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
  }

  moveCar(car, side) {
    this.setState({
      cars: {
        ...this.state.cars,
        [car]: side,
      },
    });
  };

  changeSignal(signalColor) {
    this.setState({
      signal: {
        ...this.state.signal,
        color: signalColor,
      },
    });
  };

  render() {
    const context = {
      ...this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    const { children } = this.props;

    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
  }
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
*/}