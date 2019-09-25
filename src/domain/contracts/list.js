import React from 'react';
import {translate} from "react-i18next";
import ReactTable from 'react-table'

import Content from '../../components/Main/Content';

class List extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.props.onFetch().then(res => {
            this.setState({data: res.data})
        })
    }

    render() {
        const {t} = this.props;
        const data = this.state.data

        const columns = [
            {
                Header: t("contracts.firstNameField"),
                accessor: 'customer.firstName'
            },
            {
                Header: t("contracts.lastNameField"),
                accessor: 'customer.lastName'
            },
            {
                Header: t("contracts.mobileField"),
                accessor: 'customer.mobile'
            },
            {
                Header: t("contracts.emailField"),
                accessor: 'customer.email'
            },
            {
                Header: t("contracts.totalPriceField"),
                accessor: 'totalPrice'
            },
            {
                Header: t("contracts.startContractField"),
                accessor: 'startContract'
            },
            {
                Header: t("contracts.finishContractField"),
                accessor: 'finishContract'
            },
            {
                Header: t("contracts.totalPriceField"),
                accessor: 'totalPrice'
            },
        ]

        return (
            <React.Fragment>
                <Content title={this.props.t("contracts.list-title")}
                         addButtonTitle={this.props.t("contracts.add-btn")}
                         addLink="contracts/add"
                >
                    <ReactTable
                        data={data}
                        columns={columns}
                        showPageSizeOptions={false}
                        minRows={0}
                        filterable={true}
                        showPageJump={false}
                    />
                </Content>
            </React.Fragment>
        )
    }
}

export default translate(
    "common"
)(
    List
)