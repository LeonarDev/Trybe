import logo from './logo.svg';
import './App.css';

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['job', 'class', 'gyn', 'boxe'];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* EXERCISE 1 */}
      { task('Learn React') }
      { task('Learn Node') }
      { task('Learn mySQL') }
      <br/>
      {/* EXERCISE 2 */}
      <ul>
        { tasks.map(task => <li>{ task }</li>)}
      </ul>
      </header>
    </div>
  );
}

export default App;
