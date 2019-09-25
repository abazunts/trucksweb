import React from "react";

const ListOfItemsContext = React.createContext({
  listOfItems: [],
  updateListOfItems: () => {},
  changeVisible: () => {},
  allFile: null
});

export default ListOfItemsContext;
