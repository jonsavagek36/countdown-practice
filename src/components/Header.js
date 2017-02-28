import React, { Component } from 'react';

import Countdown from './Countdown';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initTimeRemaining: 30000
    };
  }

  render() {
    let timerOn = null;
    if (this.props.timerOn) {
      if (this.props.newTime) {
        timerOn = <Countdown initTimeRemaining={this.props.newTime} interval={1000} />;
      } else {
        timerOn = <Countdown initTimeRemaining={30000} interval={1000} />;
      }
    }
    return (
      <div>
        {timerOn}
      </div>
    );
  }
}

export default Header;
