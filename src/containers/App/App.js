// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import { Header, Navigator, Bread } from 'components';
import { connect } from 'react-redux';
import { Spin } from 'antd';

class App extends React.Component {
  render() {
    return (
      <Spin spinning={this.props.loading}>
        <div className="container-fluid">
          <div className="row">
            <Header loading={this.props.loading} />
            <div className="col-xs-2">
              <Navigator navigator={this.props.navigator} />
            </div>
            <div className="col-xs-10">
              <Bread />
              {this.props.children}
            </div>
          </div>
          <div className="row no-padding sops-bottom">
            <div className="col-xs-6 text-left">
              ©Requette RSS Inventory
            </div>
            <div className="col-xs-6 text-right">
              2016
            </div>
          </div>
        </div></Spin>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigator: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.info.loading,
    navigator: state.info.navigator
  };
}

export default connect(mapStateToProps)(App);
