import { Table, Input, Icon, Button, Popconfirm } from 'antd';
import React from 'react';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: true,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  }
  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  }
  edit = () => {
    this.setState({ editable: true });
  }
  render() {
    const { value, editable } = this.state;
    return (<div className="editable-cell">
      {
        editable ?
          <div className="editable-cell-input-wrapper">
            <Input
              value={value}
              onChange={this.handleChange}
              onPressEnter={this.check}
              />
          </div>
          :
          <div className="editable-cell-text-wrapper">
            {value || ' '}
          </div>
      }
    </div>);
  }
}

export default EditableCell;
