import React, { Component } from 'react';
import Title from './components/title';
import Button from './components/button';
import LikeButton from './components/like-button';
import Square from './components/square';


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      color: 'red'
    }
  };

  render() {
    return(
      <div className="container">
        <Square color={this.state.color} />
        { ['blue', 'red', 'black'].map((color) => (
          <Button
            key={color}
            handleClick={() => this.setState({ color: color })}>
            {color}
          </Button>
        ))}
        <LikeButton />
      </div>
    );
  }
}

