import { Form, Table, Input, Icon, Button, Popconfirm, Spin, Row, Col, Tooltip } from 'antd';
const FormItem = Form.Item;
import { Random, mock } from 'mockjs';

import * as pageConfigs from 'pageConfigs';
import { connect } from 'react-redux';
import * as tableActions from 'reducers/table';
import { bindActionCreators } from 'redux';
import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class EditableTable extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = { dataSource: [], count: 0 }
    // this.pageConfig={};
    // const {item} = props;
    // if (item.productDetails) {
    //   const dataSource = JSON.parse(item.productDetails);
    //   this.state = {
    //     dataSource,
    //     count: dataSource.length,
    //     columns:[]
    //   };
    // }
  }

  componentDidMount() {
    const { id, itemID} = this.props.params;
    const {item, form, actions, config} = this.props;
    console.log(`itemDetails componentDidMount : ${id}-${itemID}`);
    id && itemID && actions.details(id, itemID);

    // this.pageConfig = config(this);
  }



  componentWillReceiveProps(nextProps) {
    const { id, itemID} = this.props.params;
    const {id: nextID, itemID: nextItemID} = nextProps.params;
    const {item, form, actions, config} = nextProps;


    if ((id !== nextProps.params.id) || (itemID !== nextProps.params.itemID)) {
      //const {nextID: id, nextItemID: itemID} = nextProps.params;

      //this.setState({ fields: pageConfigs[nextID](this).fields });
      //nextItemID && this.props.actions.details(nextID, nextItemID);
      console.log(`item componentWillReceiveProps : ${id}-${itemID},${nextID}-${nextItemID}`);

    }
    // console.log(`item componentWillReceiveProps : ${id}-${itemID},${nextID}-${nextItemID} ,nextPropsItem:`, item);

    if (this.props.item !== item) {

      item.deliveryDate = item.deliveryDate && moment(item.deliveryDate);
      item.portDate = item.portDate && moment(item.portDate);
      item.storageDate = item.storageDate && moment(item.storageDate);

      form.setFieldsValue(item);
      if (!item.productDetails) return;
      this.setState({ dataSource: item.productDetails, count: item.productDetails.length });
    }
  }

  onCellChange = (index, key) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      dataSource[index][key] = value;
      this.setState({ dataSource });
    };
  }
  onDelete = (index) => {
    return () => {
      const dataSource = [...this.state.dataSource];
      dataSource.splice(index, 1);
      this.setState({ dataSource });
    };
  }
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      productName: `Edward King ${count}`,
      RGC: '32',
      totalWeight: 100,
      currency: 'RMB',
      amount: 32
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {form, actions, params, router} = this.props;
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        values.code = Random.id();
        values.productDetails = JSON.stringify(this.state.dataSource);

        values.deliveryDate = values.deliveryDate && values.deliveryDate.format('YYYY-MM-DD')
        values.portDate = values.portDate && values.portDate.format('YYYY-MM-DD')
        values.storageDate = values.storageDate && values.storageDate.format('YYYY-MM-DD')

        // console.log('Received values of form: ', values);
        actions.create(params.id, values).then((res) => {
          console.log('done', res);
          router.push('/manage/' + params.id);
        }).catch((err) => {
          console.log('err', err);
        });
      }
    });
  }
  render() {
    const { dataSource } = this.state;
    const {loading, config, params} = this.props;
    const pageConfig = config(this);
    if (!pageConfig.columns) return <div />;

    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6
      }
    };
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    };
    return (
      <Spin spinning={loading}>
        <Form horizontal className="rss-itemDetails-form" onSubmit={this.handleSubmit}>
          <h2 className="form-title">{pageConfig.title}</h2>
          <Row gutter={16}>
            {pageConfig.fields}
          </Row>
          <Row>
            <Col span={2} className="ant-form-item-label">
              <label className=""><span>
                明细
              </span></label>
            </Col>
            <Col span={22}>
              <Table bordered dataSource={dataSource} footer={
                () => {
                  return <Button className="editable-add-btn" type="ghost" onClick={this.handleAdd}>添加</Button>;
                }
              } size="small" columns={pageConfig.detailPage.columns} className="rss-input-table" />
            </Col>
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit" size="large">保存</Button>
            </Col>
          </Row>
        </Form>
      </Spin>);
  }
}

EditableTable.propTypes = {
  params: PropTypes.object,
  actions: PropTypes.object,
  item: PropTypes.object,
  created: PropTypes.bool,
  loading: PropTypes.bool,
  config: PropTypes.func.isRequired
};

export default connect((state, ownProps) => {
  return {
    ...state.table,
    config: pageConfigs[ownProps.params.id]()
  };
}, (dispatch) => {
  return {
    actions: bindActionCreators(tableActions, dispatch)
  };
})(Form.create()(EditableTable));

// export const ItemDetails = EditableTable;