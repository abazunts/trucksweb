import React from 'react';
import './style.css'

const PrintButton = props => (
  <button className="info print-button" onClick={() => window.print()}>
    <span className="link__text">{props.title}</span>
  </button>
);

export default PrintButton