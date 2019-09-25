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
      Header: t("truck.arabicNameField"),
      accessor: 'arabicName' // String-based value accessors!
    }, {
      Header: t("truck.englishNameField"),
      accessor: 'englishName',
    }, {
      Header: t("truck.creationDateField"),
      accessor: 'createdAt',
    }]

    return (
      <React.Fragment>
        <Content title={this.props.t("truck.list-title")}
          addButtonTitle={this.props.t("truck.add-btn")}
          addLink="trucks/add"
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