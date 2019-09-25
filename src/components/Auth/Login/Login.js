import React from "react";
import LoginLogicForm from "./LoginLogicForm";
import PropTypes from "prop-types";
import Modal from "../../Modal/ErrorModal";
import {translate} from "react-i18next";

const Login = (props) => (
  <div className="login auth__wrapper">
    <h3 className="title login__title">{props.t('login.title')}</h3>
    <LoginLogicForm
      toggleErrorModal={props.toggleErrorModal}
      changeScreenAuth={props.changeScreenAuth}
      t={props.t}
      history={props.history}
    />
    <p className="text__link">
      {props.t('login.newUser')}
      <span
        className="link active"
        onClick={() => props.changeScreenAuth(false, true, false)}
      >
        {props.t('login.signUp')}
      </span>
    </p>
    <Modal />
  </div>
);

Login.propTypes = {
  toggleModal: PropTypes.func,
};

export default translate("common")(Login)
