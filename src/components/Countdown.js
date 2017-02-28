import React, { Component } from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeRemaining: this.props.initTimeRemaining,
      timeoutId: null,
      prevTime: null
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.tick();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.timeoutId) {
      clearTimeout(this.state.timeoutId);
    }
    this.setState({ prevTime: null, timeRemaining: newProps.initialTimeRemaining });
  }

  componentDidUpdate() {
    if ((!this.state.prevTime) && this.state.timeRemaining > 0) {
      this.tick();
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.timeoutId);
  }

  tick() {
    let currentTime = Date.now();
    let dt = this.state.prevTime ? (currentTime - this.state.prevTime) : 0;
    let interval = this.props.interval;

    let timeRemainingInInterval = (interval - (dt % interval));
    let timeout = timeRemainingInInterval;

    if (timeRemainingInInterval < (interval / 2.0)) {
      timeout += interval;
    }

    let timeRemaining = Math.max(this.state.timeRemaining - dt, 0);
    let countdownComplete = (this.state.prevTime && timeRemaining <= 0);

      this.setState({
        timeoutId: countdownComplete ? null : setTimeout(this.tick, timeout),
        prevTime: currentTime,
        timeRemaining: timeRemaining
      });

    if (countdownComplete) {
      if (this.props.completeCallback) {
        this.props.completeCallback();
        return;
      }
    }
    if (this.props.tickCallback) {
      this.props.tickCallback(timeRemaining);
    }
  }

  getFormattedTime(ms) {
    if (this.props.formatFunc) {
      return this.props.formatFunc(ms);
    }
    let totalSeconds = Math.round(ms / 1000);
    let seconds = parseInt(totalSeconds % 60, 10);
    let minutes = parseInt(totalSeconds / 60, 10) % 60;
    let hours = parseInt(totalSeconds / 3600, 10);

    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    hours = hours < 10 ? '0' + hours : hours;

    return hours + ':' + minutes + ':' + seconds;
  }

  render() {
    let timeRemaining = this.state.timeRemaining;
    return (
      <div>
        {this.getFormattedTime(timeRemaining)}
      </div>
    );
  }
}

export default Countdown;
