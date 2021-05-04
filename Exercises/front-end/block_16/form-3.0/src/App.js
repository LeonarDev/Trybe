import React from 'react';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form />
        </header>
      </div>
    );
  }
}

export default App;
