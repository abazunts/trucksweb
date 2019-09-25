import React from "react";
import { customStyles } from "../../style/styles";
import ModalContext from "../../context/ModalContext";
import Modal from 'react-modal';
import "./Modal.css";
import DirectionContext from "../../context/DirectionContext";

const SuccessModal = () => (
  <ModalContext.Consumer>
    { value => (
      <DirectionContext.Consumer>
      {direction =>
      <Modal
        isOpen={value.openSuccessModal}
        contentLabel="Success"
        appElement={document.getElementById('root')}
        style={customStyles}>
        <p className={direction.rtl === true ? "modal__title rtl" : "modal__title"}></p>
        <p className={direction.rtl === true ? "modal__message rtl" : "modal__message"}>{value.successDescription}</p>
        <div
          className="modal__button"
          onClick={() => value.toggleSuccessModal()}>
          Okay
        </div>
      </Modal>
      }
      </DirectionContext.Consumer>
    )}
  </ModalContext.Consumer>
);

export default SuccessModal;