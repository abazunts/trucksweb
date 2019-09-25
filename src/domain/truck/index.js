import React from 'react';
import { translate } from "react-i18next";
import { Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Content from '../../components/Main/Content';
import List from './list';
import AddForm from './add-form';
import * as api from './api';

class Container extends React.Component {

    handleAddTruck = (truck) => {
        api.add(truck)
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/trucks')
                    toast.success(this.props.t("truck.truck-added"))
                } else {
                    toast.error(this.props.t("truck.truck-submit-error"))
                }

            })
            .catch(error => {
                toast.error(this.props.t("truck.truck-submit-error"))
                console.log(error)
            })
    }

    handleFetchTrucks() {
        return api.getTrucks()
            .catch(error => toast.error("Unable to fetch the data"))
    }

    handleDeleteTruck(truckId) {

    }

    render() {
        return (
            <Switch>
                <Route exact path="/trucks" render={(props) => <List onFetch={this.handleFetchTrucks}/> } />
                <Route exact path="/trucks/add" render={(props) => <AddForm onSubmit={this.handleAddTruck}/>} />
            </Switch>
        )
    }
}

export default translate("common")(Container)