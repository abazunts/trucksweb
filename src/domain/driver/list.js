import React from 'react';
import { translate } from "react-i18next";
import ReactTable from 'react-table';
import { toast } from 'react-toastify';

import ActionButton from '../../app/components/button/button';

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
        if (res && res.status === 200) {
          this.setState({data: res.data.content})
        }
      })
  }

  render() {
    const { t } = this.props;
    const data = this.state.data
    const columns = [{
      Header: t("driver.id"),
      accessor: 'idNumber', // String-based value accessors!
    }, {
      id: 'fullName',
      Header: t("driver.fullName"),
      accessor: d => d,
      Cell: props => `${props.value.firstName} ${props.value.lastName}` // String-based value accessors!
    }, {
      Header: t("driver.mobile"),
      accessor: 'mobile' // String-based value accessors!
    },
    // {
    //   id: "actions",
    //   Header: t("driver.actions"),
    //   accessor: d => d.row,
    //   Cell: ({row}) => (
    //     <ActionButton title={t("request.view")} link={`/drivers/${row.id}`} type="info" />
    //   ),
    //   filterable: false
    // }
]

    return (
      <React.Fragment>
        <Content title={this.props.t("driver.list-title")}>
          <ReactTable
            data={data}
            columns={columns}
            showPageSizeOptions={false}
            minRows={0}
            filterable={true}
            showPageJump={false}
            showPagination={true}
          />
        </Content>
      </React.Fragment>
    )
  }
}

export default translate("common")(List)