import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from "../../../assets/icons/next_arrow.svg";
import './style.css'

const BackButton = props => (
  <Link className="back-button" to={props.link}>
    <img className="back-button-icon" src={Arrow} alt="back"/>
    <span className="link__text">{props.title}</span>
  </Link>
);

export default BackButton