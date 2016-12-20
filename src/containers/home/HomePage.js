import React from 'react';
import {Link} from 'react-router';
import { DatePicker } from 'antd';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Pluralsight course</h1>
        <p>React, Redux and React Router and antd in ES6 for ultra-responsive web apps.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        <DatePicker />
      </div>
    );
  }
}

export default HomePage;
