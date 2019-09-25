import React from 'react';

const DirectionContext = React.createContext({
  rtl: false,
  changeDirection: () => {}
});

export default DirectionContext;