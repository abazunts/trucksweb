import React, { Component } from 'react';
import FilterData from "../../components/Filters/FilterData";
import FilterContext from "../../context/FilterContext";
import {translate} from "react-i18next";
import axios from "axios";

class ApplyFilters extends Component {
  applyFilters = () => {
    const { title, status, t } = this.props;
    const { authUser, item, numberPerPage, toggleErrorModal, updateListOfItems, changeVisible, changeStatusFilter, changePageNumber } = this.props;

    let statusNo = status
    let listOfItems = []
    let totalElements = 0
    axios({
      method: 'get',
      url: '/api/v1/copyright/filter-request',
      params: { search: title, status: statusNo, size:10 }
    }).then( response => {
      listOfItems = response.data.content
      totalElements = response.data.totalElements;
      updateListOfItems(listOfItems, totalElements);
      changeVisible(listOfItems.length-1, listOfItems[0]);
      changePageNumber(1);
    } ).catch(() => toggleErrorModal(t("errorMessage.errorLoad")));
    return {
      listOfItems: listOfItems,
      lastVisible: listOfItems.length-1,
      firstVisible: listOfItems[0],
      allFile: totalElements,
    }
        
  };

  render(){
    const { authUser, numberPerPage, toggleErrorModal, changeVisible } = this.props;
    return (
      <FilterContext.Consumer>
        {value => (
          <FilterData
            item={value.item}
            title={value.title}
            status={value.status}
            changeItem={value.changeItem}
            changeTitle={value.changeTitle}
            changeStatus={value.changeStatus}
            applyFilters={this.applyFilters}
            authUser={authUser}
            numberPerPage={numberPerPage}
            toggleErrorModal={toggleErrorModal}
            changeVisible={changeVisible}
          />
          )
        }
      </FilterContext.Consumer>
    )
  }
}

export default translate("common")(ApplyFilters);