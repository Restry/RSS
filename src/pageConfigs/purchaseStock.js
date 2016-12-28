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
      title: '采购入库',
      api: 'purchaseStock',
      newFormUrl: '/manage/purchaseStock/itemDetails',
      detailPage: {
        columns: [{
          title: '编号',
          dataIndex: 'key',
          width: '5%'
        }, {
          title: '产品名称',
          dataIndex: 'productName',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'productName')} />)
        }, {
          title: 'RGC',
          dataIndex: 'RGC',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'RGC')} />)
        }, {
          title: '集装箱号',
          dataIndex: 'containerNum',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'containerNum')} />)
        }, {
          title: '批次号',
          dataIndex: 'batchNum',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'batchNum')} />)
        }, {
          title: '托盘数',
          dataIndex: 'traysCount',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'traysCount')} />)
        }, {
          title: '包装规格',
          dataIndex: 'pkgFormat',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'pkgFormat')} />)
        }, {
          title: '件数',
          dataIndex: 'count',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'count')} />)
        }, {
          title: '总重量(KG)',
          dataIndex: 'totalWeight',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'totalWeight')} />)
        }, {
          title: '破损量(KG)',
          dataIndex: 'damagedWeight',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'damagedWeight')} />)
        }, {
          title: '确认量(KG)',
          dataIndex: 'confirmWeight',
          render: (text, record, index) => (<EditableCell value={text} onChange={context.onCellChange(index, 'confirmWeight')} />)
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
          render: (text, record, index) => <Link to={'/manage/purchaseStock/itemDetails/' + record.code}>{text}</Link>
        },
        {
          title: 'DPO',
          dataIndex: 'DPO',
          width: 'auto'
        },
        {
          title: '发货日期',
          dataIndex: 'deliveryDate'
        },
        {
          title: '提单号',
          dataIndex: 'billNumber'
        },
        {
          title: '供应商',
          dataIndex: 'vendorCode'
        },
        {
          title: '接收仓库',
          dataIndex: 'receiveStorage'
        },
        {
          title: '发送仓库',
          dataIndex: 'sendStorage'
        },
        {
          title: '到港日期',
          dataIndex: 'portDate',
          width: '15%'
        },
        {
          title: '入库日期',
          dataIndex: 'storageDate'
        },
        {
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
        <Col span={8} key="0">
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
              onChange: context.handleSelectChange,
              rules: [{ required: true, message: '请选择 DPO!' }]
            })(
              <Select placeholder="请选择DPO">
                <Option value="male">male</Option>
                <Option value="female">female</Option>
              </Select>
              )}
          </FormItem>
        </Col>,

        <Col span={8} key="1">
          <FormItem
            {...formItemLayout}
            label="发货日期" hasFeedback>
            {context.props.form && context.props.form.getFieldDecorator('deliveryDate', {
              rules: [{ type: 'object', required: true, message: 'Please input your 发货日期!' }]
            })(<DatePicker />)}
          </FormItem>
        </Col>,

        <Col span={8} key="2">
          <FormItem
            {...formItemLayout}
            label="提单号" hasFeedback
            >
            {context.props.form && context.props.form.getFieldDecorator('billNumber', {
              rules: [{ required: true, message: 'Please input your 提单号!' }]
            })(<Input />)}
          </FormItem></Col>,

        <Col span={8} key="3">
          <FormItem
            {...formItemLayout}
            label="供应商" hasFeedback
            >
            {context.props.form && context.props.form.getFieldDecorator('vendorCode', {
              rules: [{ required: true, message: 'Please input your 供应商!' }]
            })(<Input />)}
          </FormItem>
        </Col>,

        <Col span={8} key="4">
          <FormItem
            {...formItemLayout}
            label={(
              <span>
                接收仓库&nbsp;
              <Tooltip title="接收仓库">
                  <Icon type="question-circle-o" />
                </Tooltip>
              </span>
            )}>
            {context.props.form && context.props.form.getFieldDecorator('receiveStorage', {
              rules: [{ required: true, message: '请选择接收仓库!' }]
            })(
              <Select placeholder="请选择接收仓库">
                <Option value="BJ">BJ</Option>
                <Option value="SH">SH</Option>
              </Select>
              )}
          </FormItem>
        </Col>,

        <Col span={8} key="5">
          <FormItem
            {...formItemLayout}
            label="发送仓库" hasFeedback
            >
            {context.props.form && context.props.form.getFieldDecorator('sendStorage', {
              rules: [{ required: true, message: 'Please input 发送仓库!' }]
            })(<Input />)}
          </FormItem>
        </Col>,

        <Col span={8} key="6">
          <FormItem
            {...formItemLayout}
            label="到港日期" hasFeedback
            >
            {context.props.form && context.props.form.getFieldDecorator('portDate', {
              rules: [{ type: 'object', required: true, message: 'Please input 到港日期!' }]
            })(<DatePicker />)}
          </FormItem>
        </Col>,

        <Col span={8} key="7">
          <FormItem
            {...formItemLayout}
            label="入库日期" hasFeedback
            >
            {context.props.form && context.props.form.getFieldDecorator('storageDate', {
              rules: [{ type: 'object', required: true, message: 'Please input 入库日期!' }]
            })(<DatePicker />)}
          </FormItem>
        </Col>,


        <Col span={24} key="8">
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
