import React from 'react';

const FilterContext = React.createContext({
  item: "",
  title: "",
  status: -1,
  changeItem: () => {},
  changeTitle: () => {},
  changeStatus: () => {},
  filter: false,
  page: 1,
  startAt: 0,
  endAt: 0,
  changeStatusFilter: () => {},
  changeStartEndPoint: () => {},
  changePageNumber: () => {},
});

export default FilterContext;