import React from 'react'
import { translate } from "react-i18next";
import ReactTable from 'react-table';
import { confirmAlert } from 'react-confirm-alert'; // Import

import Spinner from '../../app/components/spinner';
import ActionButton from '../../app/components/button/button';
import { getRequestStatus } from './utils'
import { ASSIGNED, ARRIVAL_TO_PICKUP, OUT_FOR_DELIVERY, ARRIVE_AT_DESTINATION } from './request-status';

class AssignedDrivers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            drivers: []
        }
    }

    componentWillMount() {
        this.update()
    }

    update = () => {
        this.props.onGetDrivers().then(res => {
            this.setState({
                loading: false,
                drivers: res.data
            })
        })
    }

    confirmAction = (msg, callback) => {
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

    renderActions = (value) => {
        const t = this.props.t
        if (value.status === ASSIGNED)
            return <ActionButton
                        onClick={() => 
                            this.confirmAction(
                                `${t('request.change-status-confirm-msg')} ${t('request.request-status-pickup')}`,
                                () => this.props.onPickup(value.driverRequestId, this.update)
                            )
                        }
                        title={t('request.request-status-pickup')} type="info"/>
        else if (value.status === ARRIVAL_TO_PICKUP)
            return <ActionButton
                        onClick={() => 
                            this.confirmAction(
                                `${t('request.change-status-confirm-msg')} ${t('request.request-status-out4dlv')}`,
                                () => this.props.onOutForDelivery(value.driverRequestId, this.update)
                            )
                        }
                        title={t('request.request-status-out4dlv')} type="info"/>
        else if (value.status === OUT_FOR_DELIVERY)
            return <ActionButton
                        onClick={() =>
                            this.confirmAction(
                                `${t('request.change-status-confirm-msg')} ${t('request.request-status-arrive-at-dest')}`,
                                () => this.props.onArriveAtDestination(value.driverRequestId, this.update)
                            )
                        }
                        title={t('request.request-status-arrive-at-dest')} type="info"/>
        else if (value.status === ARRIVE_AT_DESTINATION)
            return <ActionButton
                        onClick={() =>
                            this.confirmAction(
                                `${t('request.change-status-confirm-msg')} ${t('request.request-status-client-deliverd')}`,
                                () => this.props.onComplete(value.driverRequestId, this.update)
                            )
                        }
                        title={t('request.request-status-client-deliverd')} type="info"/>
        return null
    }

    render() {
        const loading = this.state.loading
        const { t } = this.props;
        const data = this.state.drivers
        const columns = [
            {
                id: 'fullName',
                Header: t("driver.fullName"),
                accessor: d => d,
                Cell: (d) => (`${d.value.firstName} ${d.value.lastName}`)
            },
            {
                Header: t("driver.idNumber"),
                accessor: 'idNumber', // String-based value accessors!
            },
            {
                Header: t("driver.mobile"),
                accessor: 'mobile' // String-based value accessors!
            },
            {
                id: "status",
                Header: t("request.status"),
                accessor: d => d,
                Cell: (d) => (
                    t(getRequestStatus(d.value.status))
                ),
            }
            , {
                id: "actions",
                Header: t("request.actions"),
                accessor: d => d,
                Cell: (d) => (
                    this.renderActions(d.value)
                )
            }
        ]
        if (loading) {
            return <Spinner />
        } else {
            return (
                <div>
                    <h2 className='details-header'>{this.props.t('request.assignedDrivers')}</h2>
                    {
                        data.length > 0 ?
                            <ReactTable
                                data={data}
                                columns={columns}
                                showPageSizeOptions={false}
                                minRows={0}
                                sortable={false}
                                defaultSorted={[{
                                    id: "idNumber",
                                    desc: true
                                  }]
                                }
                                showPageJump={false}
                                showPagination={false}
                            />
                            : null
                    }

                </div>
            )
        }
    }
}

export default translate("common")(AssignedDrivers)