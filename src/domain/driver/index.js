import React from 'react';
import { translate } from "react-i18next";
import { Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import List from './list';
import Details from './details'
import * as api from './api';

class Container extends React.Component {

    handleFetchDrivers = () => {
        return api.getDrivers()
            .catch(error => {
                toast.error(this.props.t("Unable to fetch the data"))
                console.log(error)
            })
    }

    handleGetDetails = (id) => {
        return api.getDriverDetails(id)
        .catch(error => {
            toast.error(this.props.t("Unable to fetch driver details"))
            console.log(error)
        })
    }

    render() {
        return (
            <Switch>
                <Route exact path="/drivers" render={(props) => <List onFetch={this.handleFetchDrivers}/>} />
                {/* <Route exact path="/drivers/:driverId" render={(props) => <Details {...props}/>} /> */}
            </Switch>
        )
    }
}

export default translate("common")(Container)