import React, { Component } from 'react';
import axios from 'axios';
import AuthUserContext from "../../context/AuthUserContext";
import ListOfItemsContext from "../../context/ListOfItemsContext";
import Content from "../../components/Main/Content";
import { translate } from "react-i18next";

class ContentLogic extends Component {
  updateListOfItems = (listOfItems, allFile) => {
    this.setState({ listOfItems, allFile })
  };

  changeVisible = (lastVisible, firstVisible) => {
    this.setState({ lastVisible, firstVisible })
  };

  state = {
    listOfItems: [],
    numberPerPage: 10,
    lastVisible: null,
    firstVisible: null,
    updateListOfItems: this.updateListOfItems,
    changeVisible: this.changeVisible,
    loading: false,
    allFile: null
  };

  componentDidMount() {
    this.loadListOfItems()
  }

  loadListOfItems = () => {
    const { numberPerPage } = this.state;
    const { authUser, toggleErrorModal, t } = this.props;
    const { changeVisible, updateListOfItems } = this;

    const loadingList = (loading) => {
      this.setState({ loading });
    };

    loadingList(true);
    let listOfItems = [];
    let totalElements = 0;
    axios({
      method: 'get',
      url: '/api/v1/requests?status=-1&size=10'
    }).then(response => {
      listOfItems = response.data.content;
      totalElements = response.data.totalElements;
      updateListOfItems(listOfItems, totalElements);
      changeVisible(listOfItems.length, listOfItems[0]);
      loadingList(false);
    }).catch((e) => {
      console.error(e)
      toggleErrorModal(t("errorMessage.errorLoad"))
    });

    return {
      listOfItems: listOfItems,
      lastVisible: listOfItems.length - 1,
      firstVisible: listOfItems[0],
      allFile: totalElements,
    }
  };

  render() {
    const { loading } = this.state;
    const { rtl } = this.props;

    return (
      <ListOfItemsContext.Provider value={this.state}>
        <AuthUserContext.Consumer>
          {authUser =>
            <Content
              authUser={authUser}
              loading={loading}
              rtl={rtl}
            />
          }
        </AuthUserContext.Consumer>
      </ListOfItemsContext.Provider>
    )
  }
}

export default translate("common")(ContentLogic);