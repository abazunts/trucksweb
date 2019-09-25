import React from "react";
import { customStyles } from "../../style/styles";
import Modal from 'react-modal';
import "./Modal.css";
import { translate } from "react-i18next";

const DefaultModal = (props) => {
    return (
        <Modal
            isOpen={props.isModalOpen}
            onRequestClose={props.closeModal}
            appElement={document.getElementById('root')}
            style={customStyles}
            contentLabel="Modal"
            rtl
        >
            {props.rtl? <div className="rtl">{props.content}</div> : props.content}
            
        </Modal>
    )
}

export default translate("common")(DefaultModal);