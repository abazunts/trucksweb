import React from 'react';
import FilterContext from './context/FilterContext';

const withApplyFilter = (Component) => (
  class withApplyFilter extends React.Component {
    changeTitle = (event) => {
      this.setState({title: event.target.value})
    };

    changeItem = (event) => {
      this.setState({item: event.target.value})
    };

    changeStatus = (status) => {
      this.setState({status})
    };

    changeStatusFilter = (filter) => {
      this.setState({filter})
    };

    changePageNumber = (page) => {
      this.setState({page})
    };

    changeStartEndPoint = (startAt, endAt) => {
      this.setState({ startAt, endAt })
    };

    state = {
      item: "",
      title: "",
      status: -1,
      changeItem: this.changeItem,
      changeTitle: this.changeTitle,
      changeStatus: this.changeStatus,
      filter: false,
      page: 1,
      startAt: 0,
      endAt: 10,
      changeStatusFilter: this.changeStatusFilter,
      changeStartEndPoint: this.changeStartEndPoint,
      changePageNumber: this.changePageNumber
    };

    render() {
      return (
        <FilterContext.Provider value={this.state}>
          <Component />
        </FilterContext.Provider>
      );
    }
  }
);

export default withApplyFilter;