import { EditableCell } from 'components';
import { Form, Input, Select, Tooltip, Icon, Table, Button, Popconfirm, Col } from 'antd';
import { Link, IndexLink } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;


const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 }
};

export default () => {
  return (context) => {
    return {
      title: '客户主数据',
      api: 'customer',
      newFormUrl: '/manage/customer/detail',
      fields: [
        <FormItem
          {...formItemLayout}
          label="客户代码"
          key="1"
          hasFeedback
          >
          {context.props.form && context.props.form.getFieldDecorator('code', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!'
            }, {
              required: true, message: 'Please input your E-mail!'
            }]
          })(
            <Input />
            )}
        </FormItem>,
        <FormItem
          {...formItemLayout}
          key="2"
          label={(
            <span>
              地址&nbsp;
              <Tooltip title="What do you want other to call you?">
                <Icon type="question-circle-o" />
              </Tooltip>
            </span>
          )}
          hasFeedback
          >
          {context.props.form && context.props.form.getFieldDecorator('address', {
            rules: [{ required: true, message: 'Please input your nickname!' }]
          })(
            <Input />
            )}
        </FormItem>
      ],
      columns: [
        {
          title: '客户代码',
          dataIndex: 'code',
          render: code => <Link to={'/manage/customer/detail/' + code}>{code}</Link>,
          width: '15%'
        },
        {
          title: '客户名称',
          dataIndex: 'name',
          sorter: true,
          // render: name => `${name.first} ${name.last}`,
          width: '20%'
        }, {
          title: '地址',
          dataIndex: 'address',
          filters: [
            { text: 'Male', value: 'male' },
            { text: 'Female', value: 'female' },
          ],
          width: '35%'
        }, {
          title: '联系人',
          dataIndex: 'contacts'
        }, {
          title: '联系电话',
          dataIndex: 'contact'
        }, {
          title: '操作',
          dataIndex: 'operation',
          render: (text, record, index) => {
            return (<div className="editable-row-operations">
              <span>
                <Link to={'/manage/customer/detail/' + record.code}>编辑</Link>
                <Popconfirm title="确认删除?" onConfirm={context.onDelete(record)}>
                  <span className="ant-divider"></span>
                  <a href="#">删除</a>
                </Popconfirm>
              </span>
            </div>);
          }
        }]
    }
  };
};
