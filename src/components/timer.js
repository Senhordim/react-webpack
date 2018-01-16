import React, { Component }from 'react';

export default class Timer extends Component {

  constructor(){
    super();
    this.state = {
      time: 0
    };
    this.timer;
  };

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 1000);
  };

  componentWillUnmount () {
    clearInterval(this.timer);
  };
  render () {
    return(
      <div>Timer: {this.state.time}</div>
    );
  };
};