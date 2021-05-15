import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nome: '',
      email: '',
    };
  }

  handleInput(e) {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div className="App-header">
        <h1>Teste de inputs</h1>
        <p>
          Nome:
          <input
            data-testid='input-nome'
            onChange={(e) => this.handleInput(e)}
            name='nome'
            value={this.state.nome}
          />
        </p>
        <p>
          E-mail:
          <input
            data-testid='input-email'
            onChange={(e) => this.handleInput(e)}
            name='email'
            value={this.state.email}
          />
        </p>
      </div>
    );
  }
}
