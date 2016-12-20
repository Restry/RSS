// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import {Header,Navigator} from 'components';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
      <div className="col-xs-2">
      <Navigator navigator={this.props.navigator}/>
      </div>
        <div className="col-xs-10">
        <Header
          loading={this.props.loading}
        />
        {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  navigator:PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    navigator:state.info.navigator
  };
}

export default connect(mapStateToProps)(App);
