import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return (
    <div className="col-xs-12">
      <h1 className="branding">RSS Inventory Platform
      {loading && <LoadingDots interval={100} dots={20} />}
      </h1>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
