import React from "react";
import Login from "../../../components/Auth/Login/Login";
import ModalContext from "../../../context/ModalContext";
import PropTypes from "prop-types";

const LoginLogic = (props) => (
  <ModalContext.Consumer>
    { value =>
      <Login
        openLoginModal={value.openLoginModal}
        toggleErrorModal={value.toggleErrorModal}
        toggleLoginModal={value.toggleLoginModal}
        toggleSignUpModal={value.toggleSignUpModal}
        changeScreenAuth={props.changeScreenAuth}
        history={props.history}
      />
    }
  </ModalContext.Consumer>
);

LoginLogic.propTypes = {
  toggleModal: PropTypes.func,
};

export default LoginLogic;
