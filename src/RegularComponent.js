import React, { Component } from 'react';

class RegularComponent extends Component {
  render() {
    return (
      <div>
        <span>Regular:</span><br/>
        <span>My props are {JSON.stringify(this.props, null, 2)}</span>
      </div>
    );
  }
}

export default RegularComponent;