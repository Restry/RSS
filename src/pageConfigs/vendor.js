import { EditableCell } from 'components';
import { Form, Input, Select, Tooltip, Icon, Table, Button, Popconfirm, Col } from 'antd';
import { Link, IndexLink } from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;



export default () => {
  return (context) => {
    return {
      title: '供应商主数据',
      api: 'vendor',
      newFormUrl: '/manage/vendor/detail',
      columns: [
        {
          title: '供应商代码',
          dataIndex: 'code',
          render: code => <Link to={'/manage/vendor/detail/' + code}>{code}</Link>,
          width: '25%'
        },
        {
          title: '供应商名称',
          dataIndex: 'name',
          sorter: true,
          // render: name => `${name.first} ${name.last}`,
          width: '35%'
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
        }]
    }
  };
};