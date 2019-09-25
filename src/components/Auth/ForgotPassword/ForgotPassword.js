import React, {Fragment, Component} from "react";
import PropTypes from "prop-types";
import Modal from "../../Modal/ErrorModal";
import Arrow from "../../../assets/icons/arrow.svg";
import ForgotLogicForm from "./ForgotLogicForm";
import {translate} from "react-i18next";

class ForgotPassword extends Component {
  state = {
    sendSuccess: false
  };

  changeSendStatus = () => {
    this.setState({sendSuccess: true})
  };

  render() {
    const { sendSuccess } = this.state;
    const { changeScreenAuth, toggleErrorModal, t } = this.props;
    return (
      <div className="forgot auth__wrapper">
        <div className="forgot__header auth__header">
          <h3 className="title">{t("forgot.title")}</h3>
          {!sendSuccess ?
            <div
              className="link__back"
              onClick={() => changeScreenAuth(true, false, false)}>
              <img src={Arrow} className="link__arrow" alt="back" />
              <span className="link">{t("forgot.back")}</span>
            </div>
            : null
          }
        </div>
        {!sendSuccess ?
          <ForgotLogicForm
            toggleErrorModal={toggleErrorModal}
            changeSendStatus={this.changeSendStatus}
            t={t}
          /> :
          <Fragment>
            <p
              className="send__message">
              {t("forgot.message")}
            </p>
            <button
              onClick={() => changeScreenAuth(true, false, false)}
              className="btn submit">
              {t("forgot.backToLogin")}
            </button>
          </Fragment>
        }
        <Modal />
      </div>
    )
  }
}

ForgotPassword.propTypes = {
  changeScreenAuth: PropTypes.func,
};

export default translate("common")(ForgotPassword)
