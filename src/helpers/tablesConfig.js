import { Table, Input, Icon, Button, Popconfirm } from 'antd';

export const customer = (context) => {
  return {
    title: '客户主数据',
    api:'Customer',
    columns: [
    {
      title: 'code',
      dataIndex: 'code',
      width: '15%',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
     // render: name => `${name.first} ${name.last}`,
      width: '20%',
    }, {
      title: '地址',
      dataIndex: 'address',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '35%',
    }, {
      title: 'contact',
      dataIndex: 'contact',
    }]
  };
  /*[{
    title: 'name',
    dataIndex: 'name',
    width: '25%',
    render: (text, record, index) => context.renderColumns(context.state.data, index, 'name', text),
  }, {
    title: 'age',
    dataIndex: 'age',
    width: '15%',
    render: (text, record, index) => context.renderColumns(context.state.data, index, 'age', text),
  }, {
    title: 'address',
    dataIndex: 'address',
    width: '40%',
    render: (text, record, index) => context.renderColumns(context.state.data, index, 'address', text),
  }, {
    title: 'operation',
    dataIndex: 'operation',
    render: (text, record, index) => {
      const { editable } = context.state.data[index].name;
      return (<div className="editable-row-operations">
        {
          editable ?
            <span>
              <a onClick={() => context.editDone(index, 'save')}>Save</a>
              <Popconfirm title="Sure to cancel?" onConfirm={() => context.editDone(index, 'cancel')}>
                <span className="ant-divider"></span>
                <a>Cancel</a>
              </Popconfirm>
            </span>
            :
            <span>
              <a onClick={() => context.edit(index)}>Edit</a>
              <Popconfirm title="Sure to delete?" onConfirm={context.onDelete(index)}>
                <span className="ant-divider"></span>
                <a href="#">Delete</a>
              </Popconfirm>
            </span>
        }
      </div>);
    },
  }];*/
};

