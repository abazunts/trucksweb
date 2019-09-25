import React from 'react';
import { translate } from "react-i18next";
import { confirmAlert } from 'react-confirm-alert'; // Import
import ActionButton from '../../app/components/button/button';
import BackButton from "../../app/components/button/back"
import PrintButton from "../../app/components/button/print"
import Modal from '../../components/Modal/DefaultModal';
import Content from '../../components/Main/Content';
import Spinner from '../../app/components/spinner';
import Details from './details';
import AssignForm from './assign-form'
import ApproveForm from './approve-form'
import RejectForm from './reject-from'
import AssignedDrivers from './assigned-drivers'
import { NEW, CLIENT_APPROVED, APPROVED, REJECTED, DELIVERED, CLIENT_CANCELD } from './request-status'
import WayBill from './waybill';

const ASSIGN_FORM = "ASSIGN";
const REJECT_FORM = "REJECT";
const APPROVE_FORM = "APPROVE";
const CANCEL_FORM = "CANCEL";

class ViewDetails extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            printable: false,
            request: {},
            isModalOpen: false,
            activeModal: null
        }
    }

    componentWillMount() {
        const requestId = this.props.match.params.requestId
        this.props.onGetDetails(requestId).then(res => {
            if (res) {
                this.setState({ request: res.data, loading: false })
                if (this.isWayBillPrintable(res.data.requestStatus)) {
                    this.props.onGetWaybillDetails(requestId).then(res => {
                        if (res) {
                            this.setState({ printable: true, waybill: res.data })
                        }
                    })
                }
            }
        })
    }

    isWayBillPrintable(status) {
        return status !== NEW || status !== REJECTED
    }

    closeModal = () => {
        this.setState({ isModalOpen: false, activeModal: null })
    }

    openModal = (formType) => {
        if (formType)
            this.setState({ isModalOpen: true, activeModal: formType })
    }

    renderActionButtons = (status) => {
        const { t, authUser } = this.props;
        const isAdmin = authUser && authUser.roles.filter(f => f.name === 'ROLE_ADMIN').length > 0
        const actions = []
        if (isAdmin) {
            if (status === NEW) {
                actions.push(
                    <ActionButton 
                        title={t("request.approve-action-btn")} 
                        onClick={() => this.openModal(APPROVE_FORM)} type="info" />
                )
            }
            if (status === CLIENT_APPROVED || status === APPROVED) {
                actions.push(
                    <ActionButton
                        title={t("request.assign-action-btn")}
                        onClick={() => this.openModal(ASSIGN_FORM)} type="warn" />
                )
            }
            if (status !== DELIVERED && status !== CLIENT_CANCELD) {
                actions.push(
                    <ActionButton
                        title={t("request.reject-action-btn")}
                        onClick={() => this.openModal(REJECT_FORM)} type="danger" />
                )

            }
        } else {
            if (status === NEW) {
                actions.push(
                    <ActionButton
                        title={t("request.cancel-action-btn")}
                        onClick={() => this.confirmCancelAction(t("request.confirm-cancel"), () => this.props.onCancel(this.state.request.id))}
                        type="danger" />
                )
            }
        }
        return actions.map((a, i) => <div key={i}>{a}</div>)
    }

    confirmCancelAction = (msg, callback) => {
        const t = this.props.t
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                  <div className='confirm-alert'>
                    <h4>{msg}</h4>
                    <button onClick={onClose}>{t('request.cancel')}</button>
                    <button
                      onClick={() => {
                        callback();
                        onClose();
                      }}
                    >
                        {t('request.confirm')}
                    </button>
                  </div>
                );
              }
        });
    }

    renderModalConent = () => {
        const activeModal = this.state.activeModal
        const requestId = this.state.request.id
        const t = this.props.t
        if (activeModal === APPROVE_FORM) {
            return <ApproveForm onSubmit={this.props.onApprove} requestId={requestId} />
        } else if (activeModal === REJECT_FORM) {
            return <RejectForm onSubmit={this.props.onReject} requestId={requestId} />
        } else if (activeModal === ASSIGN_FORM) {
            return <AssignForm
                {...this.props}
                onGetDrivers={this.props.onGetDrivers}
                onSubmit={this.props.onAssign} />
        } else {
            return null
        }
    }

    render() {
        const loading = this.state.loading
        const request = this.state.request
        const { authUser } = this.props;
        const isAdmin = authUser && authUser.roles.filter(f => f.name === 'ROLE_ADMIN').length > 0
        if (loading) {
            return (
                <Content title={this.props.t("request.view-request")}>
                    <Spinner />
                </Content>
            )
        } else {
            const showPrint = this.state.printable
            return (
                <React.Fragment>
                    <Content title={this.props.t("request.view-request")}>
                        <div className="button-container">
                            <BackButton title={this.props.t("request.back-btn")} link="/requests" />
                            {
                                showPrint ? <PrintButton title={this.props.t("request.print-waybill-btn")} /> : null
                            }
                        </div>
                        <div className="button-container">
                            {this.renderActionButtons(request.requestStatus)}
                        </div>
                        <Details request={request} />
                        {isAdmin?
                            <AssignedDrivers
                                onGetDrivers={() => this.props.onGetAssignedDrivers(request.id)}
                                onPickup={this.props.onPickup}
                                onOutForDelivery={this.props.onOutForDelivery}
                                onArriveAtDestination={this.props.onArriveAtDestination}
                                onComplete={this.props.onComplete} />
                        :null}
                    </Content>
                    {showPrint ? <WayBill data={this.state.waybill} /> : null}
                    <Modal
                        rtl={this.props.lng === 'ar'}
                        isModalOpen={this.state.isModalOpen}
                        closeModal={this.closeModal}
                        content={this.renderModalConent()} />
                </React.Fragment>
            )
        }
    }
}

export default translate("common")(ViewDetails)