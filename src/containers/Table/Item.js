import React, { Component, PropTypes } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Spin } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import * as pageConfigs from 'pageConfigs';
import { connect } from 'react-redux';
import * as tableActions from 'reducers/table';
import { bindActionCreators } from 'redux';

class ItemDetailForm extends Component {

  state = {
    passwordDirty: false
  }

  componentDidMount() {
    const { id, itemID} = this.props.params;
    const {item, form, actions} = this.props;
    // console.log(`item componentDidMount : ${id}-${itemID}`, this.props);
    id && itemID && actions.details(id, itemID);
    // item && form.setFieldsValue(item);
  }

  componentWillReceiveProps(nextProps) {
    const { id, itemID} = this.props.params;
    const {id: nextID, itemID: nextItemID} = nextProps.params;
    const {item, form, actions} = nextProps;


    if ((id !== nextProps.params.id) || (itemID !== nextProps.params.itemID)) {
      //const {nextID: id, nextItemID: itemID} = nextProps.params;

      //this.setState({ fields: tableConfig[nextID](this).fields });
      //nextItemID && this.props.actions.details(nextID, nextItemID);
      console.log(`item componentWillReceiveProps : ${id}-${itemID},${nextID}-${nextItemID}`);
    }
    // console.log(`item componentWillReceiveProps : ${id}-${itemID},${nextID}-${nextItemID} ,
    // nextPropsItem:`, item);

    if (this.props.item !== item) {
      form.setFieldsValue(item);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render() {
    // const { getFieldDecorator } = this.props.form;
    const {loading,config} = this.props;
    const fields = config(this).fields;

    const tailFormItemLayout = {
      wrapperCol: {
        span: 14,
        offset: 6
      }
    };

    return (
      <Spin spinning={loading}>
        <Form horizontal onSubmit={this.handleSubmit}>
          {fields}
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" size="large">保存</Button>
          </FormItem>
        </Form>
      </Spin>
    );
  }
};

ItemDetailForm.propTypes = {
  params: PropTypes.object,
  actions: PropTypes.object,
  item: PropTypes.object,
  config: PropTypes.func
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
})(Form.create()(ItemDetailForm));
