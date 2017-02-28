import React, { Component } from 'react';

import Countdown from './Countdown';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let timerOn = null;
    if (this.props.timerOn) {
      timerOn = <Countdown initTimeRemaining={30000} interval={1000} />;
    }
    return (
      <div>
        {timerOn}
      </div>
    );
  }
}

export default Header;
