import React, { Component } from 'react';
//import './App.css';

export default function HotOrColdIndicator(props) {
  const indicatorText = props.feedbackText;

  return (
    <div>
      <span>{indicatorText}</span>
    </div>
  );
}
