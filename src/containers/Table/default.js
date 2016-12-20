import React, { Component } from 'react';
import { Table } from 'antd';
import * as tableConfig from 'helpers/tablesConfig';
import { connect } from 'react-redux';
import * as tableActions from 'reducers/table';
import { bindActionCreators } from 'redux';

class AjaxTable extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      pagination: this.props.pagination
    };
    this.currentPageData = tableConfig[this.props.params.id]();
    this.columns = this.currentPageData.columns;
  }
  componentDidMount() {
    this.props.actions.load(this.currentPageData.api);
  }
  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination;
    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    this.props.actions.pagination(this.currentPageData.api, pagination, filters, sorter);
    // this.fetch({
    //   results: pagination.pageSize,
    //   page: pagination.current,
    //   sortField: sorter.field,
    //   sortOrder: sorter.order,
    //   ...filters
    // });
  }

  render() {
    const { loading, data, pagination} = this.props;
    return (
      <Table columns={this.columns}
        rowKey={record => record.code}
        dataSource={data}
        pagination={this.state.pagination}
        loading={loading}
        onChange={this.handleTableChange}
        />
    );
  }
}

export default connect((state, ownProps) => {
  return {
    loading: state.ajaxCallsInProgress > 0,
    data: state.table.data,
    pagination: state.table.pagination
  };
}, (dispatch) => {
  return {
    actions: bindActionCreators(tableActions, dispatch)
  };
})(AjaxTable);
