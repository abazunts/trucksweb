import React from "react";
import ModalContext from "../../../context/ModalContext";
import SignUp from "../../../components/Auth/SignUp/SignUp";
import PropTypes from "prop-types";

const SignUpLogic = (props) => (
  <ModalContext.Consumer>
    { value => (
      <SignUp
        toggleErrorModal={value.toggleErrorModal}
        changeScreenAuth={props.changeScreenAuth}
        history={props.history}
      />
    )}
  </ModalContext.Consumer>
);

SignUp.propTypes = {
  toggleModal: PropTypes.func,
};

export default SignUpLogic;
