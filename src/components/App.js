import React, { Component } from 'react';

import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerOn: false,
      newTime: null
    };
    this.toggleTimer = this.toggleTimer.bind(this);
    this.addTime = this.addTime.bind(this);
  }

  toggleTimer() {
    this.setState({ timerOn: !this.state.timerOn });
  }

  addTime() {
    let timeLeft = sessionStorage.getItem('timeLeft');
    if (timeLeft !== null && timeLeft <= 45000) {
      this.setState({ newTime: parseInt(timeLeft) + 15000 });
    }
  }

  render() {
    let header = <Header timerOn={this.state.timerOn} />;
    if (this.state.newTime !== null) {
      header = <Header timerOn={this.state.timerOn} newTime={this.state.newTime} />;
    }
    return (
      <div>
        {header}
        <button onClick={this.toggleTimer}>on/off</button>
        <button onClick={this.addTime}>add time</button>
      </div>
    );
  }
}

export default App;
