import React, { PureComponent } from 'react';

class Pure extends PureComponent {
  render() {
    return (
      <div>
        <span>Pure:</span><br/>
        <span>My props are {JSON.stringify(this.props, null, 2)}</span>
      </div>
    );
  }
}

export default Pure;