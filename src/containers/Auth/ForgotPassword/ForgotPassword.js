import React from "react";
import ModalContext from "../../../context/ModalContext";
import PropTypes from "prop-types";
import ForgotPassword from "../../../components/Auth/ForgotPassword/ForgotPassword";

const ForgotPasswordLogic = (props) => (
  <ModalContext.Consumer>
    { value => (
      <ForgotPassword
        toggleErrorModal={value.toggleErrorModal}
        changeScreenAuth={props.changeScreenAuth}
      />
    )}
  </ModalContext.Consumer>
);

ForgotPasswordLogic.propTypes = {
  changeScreenAuth: PropTypes.func,
};

export default ForgotPasswordLogic;