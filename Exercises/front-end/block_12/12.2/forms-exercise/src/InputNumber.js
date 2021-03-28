import React from 'react';

export default class InputNumber extends React.Component {
  render() {

    const { handleChange } = this.props;

    return (
      <input 
        type="number" 
        name="inputNumber" 
        value={ this.props.inputNumber }
        onChange={ handleChange } 
        placeholder="number" 
      />  
    )
  }
}
