import React, { Component } from 'react';

class RegularComponent extends Component {
  render() {
    console.log('rendering regular component with props', JSON.stringify(this.props));
    return (
      <div>
        <span>Regular:</span><br/>
        <span>My props are {JSON.stringify(this.props)}</span>
      </div>
    );
  }
}

export default RegularComponent;
