import React, { Component } from 'react';
import ModalContext from "../../context/ModalContext";
import AuthUserContext from "../../context/AuthUserContext";
import DirectionContext from "../../context/DirectionContext";
import Main from "../../components/Main/Main";

class MainLogic extends Component {
  render(){
    return(
      <ModalContext.Consumer>
        {value =>
          <AuthUserContext.Consumer>
            {authUser =>
              <DirectionContext.Consumer>
                {direction =>
                  <Main
                    authUser={authUser}
                    toggleModal={value.toggleModal}
                    toggleErrorModal={value.toggleErrorModal}
                    rtl={direction.rtl}
                    changeDirection={direction.changeDirection}
                    history={this.props.history}
                  />
                }
              </DirectionContext.Consumer>
            }
          </AuthUserContext.Consumer>
        }
      </ModalContext.Consumer>
    )
  }
}

export default MainLogic;