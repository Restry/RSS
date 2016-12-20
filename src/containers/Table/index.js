import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import React from 'react';
import * as tableConfig from 'helpers/tablesConfig';
import { TextCell } from 'components';

 class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.columns = tableConfig.customer(this);

        this.state = {
            data: [{
                key: '0',
                name: {
                    editable: false,
                    value: 'Edward King 0',
                },
                age: {
                    editable: false,
                    value: '32',
                },
                address:'London, Park Lane no. 0',
            }],
            count: 1
        };

        this.title = `Title:${this.props.params.id}`;
    }
    renderColumns(data, index, key, text) {
        const { editable, status } = data[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (<TextCell
            editable={editable}
            value={text}
            onChange={value => this.handleChange(key, index, value)}
            status={status}
            />);
    }
    handleChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });
    }

    onDelete = (index) => {
        return () => {
            const data = [...this.state.data];
            data.splice(index, 1);
            this.setState({ data });
        };
    }
    handleAdd = () => {
        const { count, data } = this.state;
        const newData = {
            key: count,
            name: {
                editable: false,
                value: `Edward King ${count}`,
            },
            age: {
                editable: false,
                value: '32',
            },
            address: 'London, Park Lane no. 0'
        };
        this.setState({
            data: [...data, newData],
            count: count + 1,
        });
    }

    edit(index) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({ data });
    }
    editDone(index, type) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }
    render() {
        const { data } = this.state;
        const dataSource = data.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });
        const columns = this.columns;
        return <div>
            <Button type="primary" icon="plus-circle-o" onClick={this.handleAdd}>添加</Button>
            <Table bordered dataSource={dataSource} columns={columns} />
        </div>;
    }
}

export default EditableTable;
