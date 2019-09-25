import React from "react";
import { customStyles } from "../../style/styles";
import ModalContext from "../../context/ModalContext";
import Modal from 'react-modal';
import "./Modal.css";
import {translate} from "react-i18next";

const ErrorModal = props => (
  <ModalContext.Consumer>
    { value => (
      <Modal
        isOpen={value.openErrorModal}
        contentLabel="Error"
        appElement={document.getElementById('root')}
        style={customStyles}>
        <p className="modal__title">{props.t("errorMessage.errorTitle")}</p>
        <p className="modal__message">{value.errorDescription}</p>
        <div
          className="modal__button"
          onClick={() => value.toggleErrorModal()}>
          {props.t("errorMessage.errorBtnTitle")}
        </div>
      </Modal>
    )}
  </ModalContext.Consumer>
);

export default translate("common")(ErrorModal);