import React from 'react';
import { translate } from "react-i18next";
import { Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Content from '../../components/Main/Content';
import List from './list';
import AddForm from './add-form';
import * as api from './api';

class Container extends React.Component {

    handleAddContracts = (values, pricingIdList = []) => {
        debugger
        api.addContract(values, pricingIdList)
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/contracts')
                    toast.success(this.props.t("contracts.contract-added"))
                } else {
                    toast.error(this.props.t("contracts.contract-submit-error"))
                }

            })
            .catch(error => {
                toast.error(this.props.t("contracts.contract-submit-error"))
                console.log(error)
            })
    }

    handleFetchContracts() {
        return api.getContractsAll()
            .catch(error => toast.error("Unable to fetch the data"))
    }

    render() {
        return (
            <Switch>
                <Route exact path="/contracts" render={(props) => <List onFetch={this.handleFetchContracts}/> } />
                <Route exact path="/contracts/add" render={(props) => <AddForm onSubmit={this.handleAddContracts}/>} />
            </Switch>
        )
    }
}

export default translate("common")(Container)