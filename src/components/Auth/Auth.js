import React, { Component } from 'react';
import Login from "../../containers/Auth/Login/LoginLogic";
import SignUp from "../../containers/Auth/SignUp/SignUpLogic";
import ForgotPassword from "../../containers/Auth/ForgotPassword/ForgotPassword";
import "./auth.css";

class Auth extends Component {
  state = {
    login: true,
    signup: false,
    forgot: false
  };

  changeScreenAuth = (login, signup, forgot) => {
    this.setState({login, signup, forgot})
  };

  render() {
    const { login, signup, forgot } = this.state;
    const { history } = this.props
    return (
      <div className="auth__content">
        {login ?
          <Login
            changeScreenAuth={this.changeScreenAuth}
            history={history}
          />
        : null}
        {signup ?
          <SignUp
            changeScreenAuth={this.changeScreenAuth}
            history={history}
          />
        : null}
        {forgot ?
          <ForgotPassword
            changeScreenAuth={this.changeScreenAuth}
          />
        : null}
      </div>
    )
  }
};

export default Auth;