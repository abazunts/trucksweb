import React from 'react';
import { translate } from "react-i18next";
import ReactTable from 'react-table';
import Content from '../../components/Main/Content';
import RightArrow from '../../assets/icons/right-arrow.svg';
import { getRequestStatus } from './utils'

import './table.css'

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
        this.setState({ data: res.data.content })
      }
    })
  }

  renderActionButtons = (row) => {
    // const status = row.requestStatus;
    const t = this.props.t
    // const { authUser } = this.props

    // const showAddForCorp = authUser ? authUser.roles.filter(f => f.name === 'ROLE_CORPORATE') : null
    // if (showAddForCorp && showAddForCorp.length > 0) {
    //   return <ActionButton title={t("request.view-request")} link={`/requests/view/${row.id}`} type="info" />
    // } else if (authUser.roles.filter(f => f.name === 'ROLE_ADMIN').length > 0) {
    //   if (status === NEW) {
    //     return (
    //       <div>
    //         <ActionButton title={t("request.approve-action-btn")} link={`/requests/approve/${row.id}`} type="info" />
    //         <ActionButton title={t("request.reject-action-btn")} link={`/requests/reject/${row.id}`} type="danger" />
    //         <ActionButton title={t("request.view-request")} link={`/requests/view/${row.id}`} type="info" />
    //       </div>
    //     )
    //   } else if (status === CLIENT_APPROVED || status === APPROVED) {
    //     return (
    //       <div>
    //         <ActionButton title={t("request.assign-action-btn")} link={`/requests/assign/${row.id}`} type="warn" />
    //         <ActionButton title={t("request.view-request")} link={`/requests/view/${row.id}`} type="info" />
    //       </div>)
    //   } else {
    //     return <div>
    //       <ActionButton title={t("request.view-request")} link={`/requests/view/${row.id}`} type="info" />
    //     </div>
    //   }
    // } {
    //   return null
    // }
    return <span className='action-button default-btn'>{t(getRequestStatus(row.requestStatus))}</span>
  }

  formatDate = (date) => {
    const locale = this.props.lng === 'en' ? 'en-SA' : 'ar-SA'
    return new Date(date).toLocaleDateString(locale, {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    })
  }

  render() {
    const { t, authUser } = this.props;
    const data = this.state.data
    const isAdmin = authUser && authUser.roles.filter(f => f.name === 'ROLE_ADMIN').length > 0
    const isArabic = this.props.lng !== 'en'
    const columns = [{
      Header: t("request.id"),
      accessor: 'id', // String-based value accessors!
      show: false
    }, {
      Header: t("request.corporate"),
      accessor: isArabic ? 'corporate.arabicName' : 'corporate.englishName', // String-based value accessors!
      show: isAdmin
    },
    {
      Header: t("request.awbNumber"),
      accessor: 'awbNumber', // String-based value accessors!
      // minWidth: 20,
    }, {
      Header: t("request.origin"),
      accessor: 'origin' // String-based value accessors!
    }, {
      header: '',
      Cell: props => <span className='inline-image'><img src={RightArrow} width="45px"></img></span>,
    }, {
      Header: t("request.destination"),
      accessor: 'destination' // String-based value accessors!
      // }, {
      //   Header: t("request.status"),
      //   accessor: 'requestStatus',
      //   Cell: props => <span>{t(this.getRequestStatus(props.value))}</span>
      // }, {
    }, {
      Header: t("request.createdAt"),
      accessor: 'createAt',
      Cell: props => this.formatDate(props.value) // String-based value accessors!
    }, {
      id: "actions",
      Header: t("request.status"),
      accessor: d => d,
      Cell: (d) => (
        this.renderActionButtons(d.value)
      ),
      filterable: false
    }]

    const showAddForCorp = authUser ? authUser.roles.filter(f => f.name === 'ROLE_CORPORATE') : null
    return (
      <React.Fragment>
        <Content
          title={this.props.t("request.list-title")}
          addButtonTitle={authUser && showAddForCorp.length > 0 ? this.props.t("addItem.submit") : null}
          addLink='/requests/add'
        >
          <ReactTable
            data={data}
            columns={columns}
            showPageSizeOptions={false}
            minRows={1}
            filterable={false}
            showPageJump={false}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  console.log(column)
                  this.props.history.push(`/requests/view/${rowInfo.original.id}`)
                  if (handleOriginal) {
                    handleOriginal()
                  }
                }
              }
            }}
          />
        </Content>
      </React.Fragment>
    )
  }
}

export default translate("common")(List)