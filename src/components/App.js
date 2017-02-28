import React, { Component } from 'react';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  completeCallback() {
    alert('TIMES UP BUDDY');
  }

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
