import React from 'react';
import { translate } from "react-i18next";
import { Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import Content from '../../components/Main/Content';
import List from './list';
import AddForm from './add-form';
import * as api from './api';

class Container extends React.Component {

    handleAddPricing = (pricing) => {
        api.addPricing(pricing)
            .then(res => {
                if (res.status === 200) {
                    this.props.history.push('/pricing')
                    toast.success(this.props.t("pricing.pricing-added"))
                } else {
                    toast.error(this.props.t("pricing.pricing-submit-error"))
                }

            })
            .catch(error => {
                toast.error(this.props.t("pricing.pricing-submit-error"))
                console.log(error)
            })
    }

    handleFetchPricing() {
        return api.getPricing()
            .catch(error => toast.error("Unable to fetch the data"))
    }

    handleDeletePricing(pricingId) {
        return api.deletePricing(pricingId)

    }

    handleUpdatePricing(pricingId, pricing) {
        return api.updatePricing(pricingId)

    }

    render() {
        return (
            <Switch>
                <Route exact path="/pricing" render={(props) => <List onFetch={this.handleFetchPricing}/> } />
                <Route exact path="/pricing/add" render={(props) => <AddForm onSubmit={this.handleAddPricing}/>} />
            </Switch>
        )
    }
}

export default translate("common")(Container)