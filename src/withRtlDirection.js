import React from 'react';

import DirectionContext from "./context/DirectionContext";

const withRtlDirection = (Component) => (
  class withRtlDirection extends React.Component {
    changeDirection = (rtl) => {
      this.setState({ rtl })
    };

    state = {
      rtl: false,
      changeDirection: this.changeDirection
    };

    render() {
      return (
        <DirectionContext.Provider value={this.state}>
          <Component />
        </DirectionContext.Provider>
      );
    }
  }
)

export default withRtlDirection;