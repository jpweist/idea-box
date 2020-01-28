import React from 'react';
import './Ideas.css';

const Ideas = (props) => {
  return (
    <div>
      <h2>Hello, {props.name}!</h2>
      <p>{props.age}</p>
    </div>
  )
}

export default Ideas;
