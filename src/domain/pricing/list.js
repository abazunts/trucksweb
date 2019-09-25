import React from 'react';
import { translate } from "react-i18next";
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
    const { t } = this.props;
    const data = this.state.data

    const columns = [{
      Header: t("pricing.discountField"),
      accessor: 'discount' // String-based value accessors!
    }, {
      Header: t("pricing.distanceField"),
      accessor: 'distance',
    }, {
      Header: t("pricing.freightIdField"),
      accessor: 'freightId',
    },
      {
      Header: t("pricing.numberOfTrucksField"),
      accessor: 'numberOfTrucks',
    },
      {
      Header: t("pricing.totalPriceField"),
      accessor: 'totalPrice',
    },
      {
      Header: t("pricing.truckIdField"),
      accessor: 'truckId',
    }]

    return (
      <React.Fragment>
        <Content title={this.props.t("pricing.list-title")}
          addButtonTitle={this.props.t("pricing.add-btn")}
          addLink="pricing/add"
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

export default translate("common")(List)