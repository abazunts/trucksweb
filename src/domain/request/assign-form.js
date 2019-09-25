import React from 'react';
import { translate } from "react-i18next";
import Select from 'react-select';
import ActionButton from '../../app/components/button/button';

import Button from '../../app/components/button'
import ReactTable from 'react-table';
import Spinner from '../../app/components/spinner';

class AssignDriverForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            options: [],
        }
    }

    componentWillMount() {
        this.props.onGetDrivers().then(res => {
            const drivers = []
            res.data.content.forEach((d, i) => {
                console.log(d)
                drivers.push({ 
                    index: i, 
                    value: d.driverId,
                    idNumber: d.idNumber,
                    label: `${d.firstName} ${d.lastName} (${d.idNumber}) (${d.mobile})` ,
                    fullName: `${d.firstName} ${d.lastName}`,
                    mobile: d.mobile
                })
            })
            this.setState({
                options: drivers,
                loading: false
            })
        })
    }

    onSubmit = () => {
        const requestId = this.props.match.params.requestId
        const drivers = this.state.options.filter(d => d.selected).map(d => d.value)
        if (drivers.length === 0) {
            this.setState({ error: this.props.t("request.missing-driver") })
        } else {
            this.props.onSubmit(requestId, drivers)
        }
    }

    onChange = (values) => {
        const drivers = this.state.options
        drivers[values.index] = { ...drivers[values.index], selected: true }
        this.setState({ options: drivers })
    }

    deleteDriver = (rowIndex, values) => {
        const drivers = this.state.options
        drivers[values.index] = { ...drivers[values.index], selected: false }
        this.setState({ 
            options: drivers
        })
    }

    getOptions = () => {
        return this.state.options.filter(driver => !driver.selected)
    }

    renderSelect = () => {
        return (
            <Select
                placeholder={this.props.t("request.assign-ph")}
                options={this.getOptions()}
                onChange={this.onChange}
            />
        )
    }

    getSelectedDrivers = () => {
        return this.state.options.filter(driver => driver.selected)
    }

    render() {
        const loading = this.state.loading
        const { t } = this.props;
        const data = this.getSelectedDrivers()
        const columns = [
            {
                Header: t("driver.fullName"),
                accessor: 'fullName' // String-based value accessors!
            },
            {
                Header: t("driver.idNumber"),
                accessor: 'idNumber', // String-based value accessors!
            },
            {
                Header: t("driver.mobile"),
                accessor: 'mobile' // String-based value accessors!
            }, {
                id: "actions",
                Header: t("request.actions"),
                accessor: d => d,
                Cell: (d) => (
                    <ActionButton onClick={() => this.deleteDriver(d.index, d.value)} title={t('delete')} type="danger"/>
                )
            }
        ]
        if (loading) {
            return <Spinner />
        } else {
            return (
                <div className="large-modal assign-modal">
                    <h2 className='details-header'>{this.props.t('request.assign-form-title')}</h2>
                    <br />
                    {this.renderSelect()}
                    {<div style={{ color: 'red' }}>{this.state.error}</div>}
                    {
                        data.length > 0?
                            <ReactTable
                            data={data}
                            columns={columns}
                            showPageSizeOptions={false}
                            minRows={0}
                            showPageJump={false}
                            showPagination={false}
                            />
                        : null
                    }
                    
                    <br />
                    <Button label={this.props.t("request.assign-btn")} onClick={this.onSubmit} />
                </div>
            )
        }
    }
}

export default translate("common")(AssignDriverForm)