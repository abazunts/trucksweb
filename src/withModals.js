import React from 'react';
import ModalContext from "./context/ModalContext";

const withModals = (Component) => (
  class withModals extends React.Component {
    toggleErrorModal = (message) => {
      this.setState({
        openErrorModal: !this.state.openErrorModal,
        errorDescription: message
      })
    };

    toggleSuccessModal = (message) => {
      this.setState({
        openSuccessModal: !this.state.openSuccessModal,
        successDescription: message
      })
    };

    state = {
      openErrorModal: false,
      openSuccessModal: false,
      errorDescription: "",
      successDescription: "",
      toggleErrorModal: this.toggleErrorModal,
      toggleSuccessModal: this.toggleSuccessModal,
    };

    render() {
      return (
        <ModalContext.Provider value={this.state}>
          <Component />
        </ModalContext.Provider>
      );
    }
  }
)

export default withModals;