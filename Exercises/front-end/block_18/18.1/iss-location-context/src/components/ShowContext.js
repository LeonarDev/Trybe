import React from 'react';

import ISSContext from '../context/ISSContext';

class ShowContext extends React.Component {
  render() {
    const { name, lastName } = this.context;
    return (
      <span>
        Nome:
        {name}
        Sobrenome:
        {lastName}
      </span>
    );
  }
}

ShowContext.contextType = ISSContext;

export default ShowContext;
