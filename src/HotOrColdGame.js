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
      correctNumber: Math.floor(Math.random() * 101),
      mostRecentGuessed: null,
      pastGuesses: [],
      feedbackText: 'Make your Guess!'
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
