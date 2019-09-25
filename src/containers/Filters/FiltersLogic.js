import React, { Component } from "react";
import ModalContext from "../../context/ModalContext";
import ListOfItemsContext from "../../context/ListOfItemsContext";
import FilterContext from "../../context/FilterContext";
import ApplyFilters from "./ApplyFilters";

class FiltersLogic extends Component {
  render() {
    const { authUser } = this.props;
    return (
      <FilterContext.Consumer>
        {valueFilter =>
          <ListOfItemsContext.Consumer>
            {value =>
              <ModalContext.Consumer>
                {valueModal =>
                  <ApplyFilters
                    authUser={authUser}
                    numberPerPage={value.numberPerPage}
                    firstVisible={value.firstVisible}
                    toggleErrorModal={valueModal.toggleErrorModal}
                    updateListOfItems={value.updateListOfItems}
                    changeVisible={value.changeVisible}
                    item={valueFilter.item}
                    title={valueFilter.title}
                    status={valueFilter.status}
                    filter={valueFilter.filter}
                    changeStatusFilter={valueFilter.changeStatusFilter}
                    changePageNumber={valueFilter.changePageNumber}
                  />
                }
              </ModalContext.Consumer>
            }
          </ListOfItemsContext.Consumer>
        }
      </FilterContext.Consumer>
    )
  }
}

export default FiltersLogic;