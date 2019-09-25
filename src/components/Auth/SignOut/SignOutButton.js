import React, { Component } from "react";
import axios from 'axios';
import ArrowBlack from "../../../assets/icons/arrow_black.svg"


class SignOutButton extends Component {
  signUpHandler = () => {
    axios({
      method: 'get',
      url: '/api/v1/logout'
    })
    // FIXME: do not use reload!
    
    // if (this.props.history.location.pathname === '/') {
      window.location.reload()
    // }else {
    //   this.props.history.push('/login')
    // }
    
    // window.location.reload()
    
  };

  render(){
    const { t } = this.props;
    return(
      <div
        className="logout"
        onClick={this.signUpHandler}>
        <span className="btn__text">{t("auth.logout")}</span>
        <img
          className="btn__icon"
          src={ArrowBlack}
          alt="back"
        />
      </div>
    )
  }
}

export default SignOutButton;