import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from "../../../assets/icons/next_arrow.svg";

const LoginButton = props => (
  <Link className="link__back link__back-absolute" to="/">
    <img className="link__icon" src={Arrow} alt="back"/>
    <span className="link__text">{props.t("forgot.backToLogin")}</span>
  </Link>
);

export default LoginButton