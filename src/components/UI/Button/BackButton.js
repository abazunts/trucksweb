import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from "../../../assets/icons/next_arrow.svg";

const BackButton = props => (
  <Link className="link__back" to="/">
    <img className="link__icon" src={Arrow} alt="back"/>
    <span className="link__text">{props.t("addItem.back")}</span>
  </Link>
);

export default BackButton