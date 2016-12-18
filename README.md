# antd-starter
React, Redux and React Router and antd in ES6 for ultra-responsive web apps

## 技术点
- React
- Redux
- React-Router
- antd
- ES7 Components  好处是我们在组件中定义的方法不用自己去初始化里面.bind(this)了;像这样：


`state = {
    value: this.props.value,
    editable: false,
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ value });
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
`
- mock.js api
