import React from "react";
import SignUpLogicForm from "./SignUpLogicForm";
import PropTypes from "prop-types";
import Modal from "../../Modal/ErrorModal";
import Arrow from "../../../assets/icons/arrow.svg";
import {translate} from "react-i18next";

const SignUp = (props) => (
  <div className="signup auth__wrapper">
    <div className="signup__header auth__header">
      <h3 className="title">{props.t("signup.title")}</h3>
      <div
        className="link__back"
        onClick={() => props.changeScreenAuth(true, false, false)}>
        <img src={Arrow} className="link__arrow" alt="back" />
        <span className="link">{props.t("signup.back")}</span>
      </div>
    </div>
    <SignUpLogicForm
      toggleErrorModal={props.toggleErrorModal}
      t={props.t}
      history={props.history}
    />
    <Modal />
  </div>
);

SignUp.propTypes = {
  toggleModal: PropTypes.func,
};

export default translate("common")(SignUp)
