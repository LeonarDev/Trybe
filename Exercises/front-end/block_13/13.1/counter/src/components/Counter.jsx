import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      counter: 0,
    };
    console.log('construtor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state, nextState);
    // if (nextProps.value % 3 !== 0) return false;
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', this.state, prevState);
  }

  render() {
    console.log('render');

    return (
      <div>
        <p>Contador</p>
        <button onClick={ () => this.setState((state) => ({ counter: state.counter + 1 })) }>
          Incrementa 1
        </button>
        <button onClick={ () => this.setState((state) => ({ counter: state.counter - 1 })) }>
          Decrementa 1
        </button>
        <button onClick={ () => this.setState((state) => ({ counter: state.counter = 0 })) }>
          Reset
        </button>
        <p>counter: {this.state.counter}</p>
      </div>
    )
  }
}

export default Counter;
