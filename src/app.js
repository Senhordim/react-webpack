import React, { Component } from 'react';
import Button from './components/button';
import Square from './components/square';
import Timer from './components/timer';


export default class App extends Component {
  constructor(){
    console.log('constructor');
    super()
    this.state = {
      time: 0,  
      showTimer: true
    }
  };

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', this.props, nextProps);
  };

  componentWillMount () {
    console.log('componentWillMount');
  };

  componentDidMount () {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return(
      // <div className="container">
      //   <Square color={this.state.color} />
      //   { ['blue', 'red', 'black'].map((color) => (
      //     <Button
      //       key={color}
      //       handleClick={() => this.setState({ color: color })}>
      //       {color}
      //     </Button>
      //   ))}
      //   <LikeButton />
      // </div>
      <div>
        { this.state.showTimer && <Timer time={this.state.time} />}
        <button onClick={() => {
          this.setState({ showTimer: !this.state.showTimer })
        }}> Show / hide timer</button>
      </div>
    );
  }
}

