import React from 'react';

export default class inputText extends React.Component {
  render() {

    const { handleChange } = this.props;

    return(
      <input 
        type="text" 
        name="inputText" 
        value={ this.props.inputText }
        onChange={ handleChange } 
        placeholder="name" 
      />      
    )
  }
}
