import React from 'react';

const modalContext = React.createContext({
  errorModal: false,
  openSuccessModal: false,
  errorDescription: "",
  successDescription: "",
  toggleErrorModal: () => {},
  toggleSuccessModal: () => {}

});

export default modalContext;