import React, { PureComponent } from 'react';

class Pure extends PureComponent {
  render() {
    console.log('rendering pure component with props', JSON.stringify(this.props));
    return (
      <div>
        <span>Pure:</span><br/>
        <span>My props are {JSON.stringify(this.props)}</span>
      </div>
    );
  }
}

export default Pure;