import React from 'react';
import { translate } from "react-i18next";
import { Switch, Route } from 'react-router-dom';
import { toast } from 'react-toastify';
import List from './list';
import * as api from './api';
import * as trkApi from '../truck/api'
// TODO: prevent access to other domains!!
import { getDrivers } from '../driver/api'
import './styles.css';
import RequestComponent from '../requestTruck/RequestComponent';
import AuthUserContext from '../../context/AuthUserContext';
import ViewDetails from './view-details';

class Container extends React.Component {

    handleFetchRequests = () => {
        return api.getRequests()
    }

    handleApproveRequest = (id, price) => {
        api.approve(id, price).then(res => {
            if (res.status === 200) {
                this.props.history.push('/requests')
                toast.success(this.props.t("Request is now approved."))
            } else {
                toast.error(this.props.t("An error occurred while trying to approve the request"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred while trying to approve the request"))
            console.log(error)
        })
    }

    handleRejectRequest = (id, reason) => {
        api.reject(id, reason).then(res => {
            if (res.status === 200) {
                this.props.history.push('/requests')
                toast.success(this.props.t("Request is now rejected."))
            } else {
                toast.error(this.props.t("An error occurred while trying to reject the request"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred while trying to reject the request"))
            console.log(error)
        })
    }

    handleCancelRequest = (id) => {
        api.cancel(id).then(res => {
            if (res.status === 200) {
                this.props.history.push('/requests')
                toast.success(this.props.t("Request is now canceld."))
            } else {
                toast.error(this.props.t("An error occurred while trying to cancel the request"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred while trying to cancel the request"))
            console.log(error)
        })
    }

    handleAssignRequest = (requestId, driversIds) => {
        return api.assign(requestId, driversIds).then(res => {
            if (res.status === 200) {
                this.props.history.push('/requests')
                toast.success(this.props.t("The request updated successfully."))
            } else {
                toast.error(this.props.t("An error occurred while trying to assign the request"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred while trying to assign the request"))
            console.log(error)
        })
    }

    handleGetDrivers = () => {
        return getDrivers().catch(error => {
            toast.error("Unable to get drivers")
            console.error(error)
        })
    }

    handleGetAssignedDrivers = (requesdId) => {
        return api.getAssignedDrivers(requesdId).catch(error => {
            toast.error(this.props.t("Unable to fetch the drivers"))
            console.log(error)
        })
    }

    handleGetDetails = (id) => {
        return api.getRequestDetails(id)
            .catch(error => {
                toast.error(this.props.t("Unable to fetch the request details"))
                console.log(error)
            })
    }

    handleAddRequest = (request) => {
        return api.addRequest(request).then(res => {
            if (res.status === 200) {
                this.props.history.push('/requests')
                toast.success(this.props.t("The Request is Sent."))
            } else {
                toast.error(this.props.t("An error occurred while trying to send the request"))
            }
        }).catch(error => {
            toast.error(this.props.t("Unable to send the request"))
            console.log(error)
        })
    }

    handleGetTruckTypes = () => {
        return trkApi.getTrucks()
    }

    handleGetWaybill = (id) => {
        return api.getWaybillDetails(id)
            .catch(error => {
                console.error(this.props.t("Unable to fetch the request details"))
            })
    }

    handlePickup = (driverRequestId, callback) => {
        api.pickup(driverRequestId).then(res => {
            if (res.status === 200) {
                toast.success(this.props.t("Updated Successfully."))
                callback()
            } else {
                toast.error(this.props.t("An error occurred"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred"))
            console.log(error)
        })
    }

    handleOutForDelivery = (driverRequestId, callback) => {
        api.outForDelivery(driverRequestId).then(res => {
            if (res.status === 200) {
                toast.success(this.props.t("Updated Successfully."))
                callback()
            } else {
                toast.error(this.props.t("An error occurred"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred"))
            console.log(error)
        })
    }

    handleArriveAtDestination = (driverRequestId, callback) => {
        api.arriveAtDestination(driverRequestId).then(res => {
            if (res.status === 200) {
                toast.success(this.props.t("Updated Successfully."))
                callback()
            } else {
                toast.error(this.props.t("An error occurred"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred"))
            console.log(error)
        })
    }

    handleComplete = (driverRequestId, callback) => {
        api.complete(driverRequestId).then(res => {
            if (res.status === 200) {
                toast.success(this.props.t("Updated Successfully."))
                callback()
            } else {
                toast.error(this.props.t("An error occurred"))
            }
        }).catch(error => {
            toast.error(this.props.t("An error occurred"))
            console.log(error)
        })
    }

    render() {
        return (
            <AuthUserContext.Consumer>
                {authUser =>
                    <Switch>
                        <Route exact path="/requests" render={(props) => <List {...props} authUser={authUser} onFetch={this.handleFetchRequests} />} />
                        <Route exact path="/requests/add" render={(props) => <RequestComponent {...props} onSubmit={this.handleAddRequest} onGetTrucks={this.handleGetTruckTypes} />} />
                        <Route exact path="/requests/view/:requestId"
                            render={(props) => (
                                <ViewDetails {...props}
                                    authUser={authUser}
                                    onGetDetails={this.handleGetDetails}
                                    onGetWaybillDetails={this.handleGetWaybill}
                                    onGetDrivers={this.handleGetDrivers}
                                    onAssign={this.handleAssignRequest}
                                    onApprove={this.handleApproveRequest}
                                    onReject={this.handleRejectRequest}
                                    onGetAssignedDrivers={this.handleGetAssignedDrivers}
                                    onPickup={this.handlePickup}
                                    onOutForDelivery={this.handleOutForDelivery}
                                    onArriveAtDestination={this.handleArriveAtDestination}
                                    onComplete={this.handleComplete}
                                    onCancel={this.handleCancelRequest}
                                />
                            )}
                        />
                    </Switch>
                }
            </AuthUserContext.Consumer>

        )
    }
}

export default translate("common")(Container)