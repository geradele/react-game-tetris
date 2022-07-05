import React, { Component } from 'react';
import './GameBoard.css';

export default class GameBoard extends Component {
  render() {
    return (
      <div className='game-board'>{JSON.stringify(this.props.board)}</div>
    )
  }
}
