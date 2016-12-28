import { EditableCell } from 'components';
import { Form, Input, Select, Tooltip, Icon, Table, Button, Popconfirm, Col, DatePicker } from 'antd';
import { Link, IndexLink } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
};
const formOneLineLayout = {
  labelCol: { span: 2 },
  wrapperCol: { span: 22 }
};


export default () => {
  return (context) => {
    return {
      title: '采购在途',
      api: 'purchaseTransit',
      newFormUrl: '/manage/purchaseTransit/itemDetails',
      detailPage: {
        columns: [{
          title: '编号',
          dataIndex: 'key',
          width: '5%'
        }, {
          title: '产品名称',
          dataIndex: 'productName',
          render: (text, record, index) => (
            <EditableCell
              value={text}
              onChange={context.onCellChange(index, 'productName')}
              />
          )
        }, {
          title: 'RGC',
          dataIndex: 'RGC',
          render: (text, record, index) => (
            <EditableCell
              value={text}
              onChange={context.onCellChange(index, 'RGC')}
              />
          )
        }, {
          title: '总重量(KG)',
          dataIndex: 'totalWeight',
          render: (text, record, index) => (
            <EditableCell
              value={text}
              onChange={context.onCellChange(index, 'totalWeight')}
              />
          )
        }, {
          title: '币种',
          dataIndex: 'currency',
          render: (text, record, index) => (
            <EditableCell
              value={text}
              onChange={context.onCellChange(index, 'currency')}
              />
          )
        }, {
          title: '金额',
          dataIndex: 'amount',
          render: (text, record, index) => (
            <EditableCell
              value={text}
              onChange={context.onCellChange(index, 'amount')}
              />
          )
        }, {
          title: '操作',
          dataIndex: 'operation',
          render: (text, record, index) => {
            return (
              context.state.dataSource.length > 1 ?
                (
                  <Popconfirm title="Sure to delete?" onConfirm={context.onDelete(index)}>
                    <a href="#">删除</a>
                  </Popconfirm>
                ) : null
            );
          }
        }]

      },
      columns: [
        {
          title: '编号',
          dataIndex: 'code',
          width: 'auto',
          render: (text, record, index) => <Link to={'/manage/purchaseTransit/itemDetails/' + record.code}>{text}</Link>
        },
        {
          title: '供应商',
          dataIndex: 'vendorCode',
          width: '15%'
        },
        {
          title: '默认仓库',
          dataIndex: 'defaultStorage',
          width: 'auto'
        },
        {
          title: '发货日期',
          dataIndex: 'deliveryDate',
          width: '15%'
        },
        {
          title: 'DPO',
          dataIndex: 'DPO',
          width: 'auto'
        },
        {
          title: '提单号',
          dataIndex: 'billNumber',
          width: '15%'
        },
        {
          title: '备注',
          dataIndex: 'notes',
          width: '15%'
        }, {
          title: '操作',
          dataIndex: 'operation',
          render: (text, record, index) => {
            return (<div className="editable-row-operations">
              <span>
                <Link to={'/manage/vendor/detail/' + record.code}>编辑</Link>
                <Popconfirm title="确认删除?" onConfirm={context.onDelete(record)}>
                  <span className="ant-divider"></span>
                  <a href="#">删除</a>
                </Popconfirm>
              </span>
            </div>);
          }
        }],
      fields: [
        <Col span={8} key="1">
          <FormItem
            {...formItemLayout}
            label="供应商" hasFeedback
            >
            {context.props.form && context.props.form.getFieldDecorator('vendorCode', {
              rules: [{
                required: true, message: 'Please input your 供应商!'
              }]
            })(<Input />)}
          </FormItem></Col>,
        <Col span={8} key="2">
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                默认仓库&nbsp;
              <Tooltip title="What do you want other to call you?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )} hasFeedback>
            {context.props.form && context.props.form.getFieldDecorator('defaultStorage', {
              rules: [{ required: true, message: 'Please input your 默认仓库!' }]
            })(
              <Input />
              )}
          </FormItem>
        </Col>,
        <Col span={8} key="3">
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                发货日期&nbsp;
              <Tooltip title="发货日期">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )} hasFeedback>
            {context.props.form && context.props.form.getFieldDecorator('deliveryDate', {
              rules: [{ required: true, message: 'Please input your 发货日期!' }]
            })(
              <DatePicker />
              )}
          </FormItem>
        </Col>,
        <Col span={8} key="4">
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                DPO&nbsp;
              <Tooltip title="DPO">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}>
            {context.props.form && context.props.form.getFieldDecorator('DPO', {
              rules: [{ required: true, message: 'Please input your DPO!' }]
            })(
              <Input />
              )}
          </FormItem>
        </Col>,
        <Col span={8} key="5">
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                提单号&nbsp;
              <Tooltip title="提单号?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}>
            {context.props.form && context.props.form.getFieldDecorator('billNumber', {
              rules: [{ required: true, message: 'Please input your 提单号!' }]
            })(
              <Input />
              )}
          </FormItem>
        </Col>,
        <Col span={24} key="6">
          <FormItem
            {...formOneLineLayout}
            label={(
              <span>
                备注&nbsp;
              <Tooltip title="notes?">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )} hasFeedback>
            {context.props.form && context.props.form.getFieldDecorator('notes')(<Input type="textarea" autosize={{ minRows: 3, maxRows: 8 }} />)}
          </FormItem>
        </Col>
      ]
    };
  };
};
