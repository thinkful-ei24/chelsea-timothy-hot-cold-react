import React, { Component } from 'react';
//import './App.css';

export default function PastGuesses(props) {
  const pastGuess = props.pastGuess.map(num => {
    <li>{num}</li>;
  });

  return (
    <div>
      <ol>{pastGuess}</ol>
    </div>
  );
}
