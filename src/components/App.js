import React, { Component } from 'react';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false
    };
    this.toggleTimer = this.toggleTimer.bind(this);
  }

  toggleTimer() {
    this.setState({ timerOn: !this.state.timerOn });
  }

  render() {
    return (
      <div>
        <Header timerOn={this.state.timerOn} />
        <button onClick={this.toggleTimer}>on/off</button>
      </div>
    );
  }
}

export default App;
