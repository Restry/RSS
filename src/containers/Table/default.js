import React, { Component, PropTypes } from 'react';
import { Table } from 'antd';
import * as pageConfigs from 'pageConfigs';
import { connect } from 'react-redux';
import * as tableActions from 'reducers/table';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class AjaxTable extends Component {
  constructor(props, context) {
    super(props, context);

    const { pagination } = props;
    this.state = {
      pagination: pagination,
      config: () => { }
    };
    console.log('default conc init');
  }
  componentDidMount() {
    let { pagination, params, config, actions } = this.props;
    const pageConfig = config(this);
    this.setState({ config: pageConfig });

    actions.load(pageConfig.api);
    console.log(`default componentDidMount:${pageConfig.api}`);
  }
  componentWillReceiveProps(nextProps) {
    const {params, actions} = this.props;
    const {created, edited, deleted, params: nextParams, config: nextConfig} = nextProps;

    if (params.id !== nextParams.id) {
      console.log(`default componentWillReceiveProps:before-${params.id};after-${nextParams.id}`,nextConfig);

      const config = nextConfig(this);
      this.setState({ config });
      actions.load(config.api);
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = this.state.pagination;
    const { actions } = this.props;

    pager.current = pagination.current;
    this.setState({
      pagination: pager,
    });
    actions.pagination(this.state.config.api, pagination, filters, sorter);
  }
  onDelete = (obj) => {
    return () => {
      const {actions, params} = this.props;
      actions.remove(params.id, obj.id).then(() => {
        actions.load(this.state.config.api);
      });
      // alert(obj.code);
    }
  }
  render() {
    const { loading, data} = this.props;
    const { config, pagination} = this.state;
    return (
      <Table columns={config.columns}
        rowKey={record => record.code}
        dataSource={data}
        footer={() => {
          return <Link to={config.newFormUrl}>添加</Link>
        } }
        pagination={this.state.pagination}
        loading={loading}
        onChange={this.handleTableChange}
        />
    );
  }
}

AjaxTable.propTypes = {
  config: PropTypes.func.isRequired
}

export default connect((state, ownProps) => {
  console.log(`default connect : ${ownProps.params.id}`);
  return {
    ...state.table,
    config: pageConfigs[ownProps.params.id]()
  };
}, (dispatch) => {
  return {
    actions: bindActionCreators(tableActions, dispatch)
  };
})(AjaxTable);
