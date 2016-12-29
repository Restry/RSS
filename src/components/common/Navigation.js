import { Menu, Icon } from 'antd';
import React, { PropTypes } from 'react';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Link, IndexLink } from 'react-router';

const Sider = React.createClass({
  getInitialState() {
    return {
      current: 'mail'
    };
  },
  handleClick(e) {
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  },
  render() {
    const {navigator} = this.props;
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 'auto' }}
        defaultOpenKeys={['mail','appstore']}
        selectedKeys={[this.state.current]}
        mode="inline"
        >
        {navigator && navigator.map((item, index) => {
          if (!item.childs) {
            return (
              <Menu.Item key={item.class}>
                <Link to={item.url}><Icon type={item.class} />{item.title}</Link>
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu key={item.class} title={<span><Icon type={item.class} /><span>{item.title}</span></span>}>
                {item.childs.map((childItem,childIndex)=>{
                  return (<Menu.Item key={childItem.class}><Link to={childItem.url}>{childItem.title}</Link></Menu.Item>);
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
    );
  },
});
export default Sider;
