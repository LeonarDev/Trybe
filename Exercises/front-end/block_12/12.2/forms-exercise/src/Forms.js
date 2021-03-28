import React from 'react';

export default class Forms extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      controled: '',
      selected: '',
      inputText: '',
      inputNumber: 0,
      check: false,
    }
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <p>FORM</p>

        <label> 
          Número de 1 a 5
          <select 
            name="selected" 
            onChange={ this.handleChange }>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </label>


        <input 
          type="text" 
          name="inputText" 
          value={ this.state.inputText }
          onChange={ this.handleChange } 
          placeholder="name" />
        
        <input 
          type="number" 
          name="inputNumber" 
          value={ this.state.inputNumber }
          onChange={ this.handleChange } 
          placeholder="number" />
        
        <textarea 
          name="controled" 
          value={ this.state.controled }
          onChange={ this.handleChange }>
        </textarea>
        
        <p>{ this.state.controled }</p>
        
        <br />

        <label>
          <input 
            name="check"
            type="checkbox"
            value={ this.state.check }
            onChange={ this.handleChange }
          />
        </label>
        
      </div>
    )
  }
}