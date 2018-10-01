import React, { Component } from 'react';
//import './App.css';

export default function GuessCount(props) {
  const count = props.count;
  return <p>{`Guess #${count}!`}</p>;
}
