import React from 'react';
import './style.css'

const Button = props => (
  <button className={`button-link ${props.type}`} onClick={props.onClick}>
    <span className="link__text">{props.title}</span>
  </button>
);

export default Button