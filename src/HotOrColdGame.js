import React, { Component } from 'react';
import Feedback from './Feedback';
import GuessInput from './GuessInput';
import GuessCount from './GuessCount';
import PastGuesses from './PastGuesses';
//import './App.css';

export default class HotOrColdGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guessThisNumber: Math.floor(Math.random() * 101),
      mostRecentGuessed: null,
      pastGuesses: [],
      feedbackText: 'Make your Guess!',
      feedbackOptions: ['Hot', 'Cold', 'You won. Click New Game to play again']
    };
  }

  render() {
    return (
      <div>
        <Feedback feedbackText={this.state.feedbackText} />
        <GuessInput />
        <GuessCount count={0} />
        <PastGuesses pastGuess={[]} />
      </div>
    );
  }
}
