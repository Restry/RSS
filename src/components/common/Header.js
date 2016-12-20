import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import Bread from './Breadcrumb';

const Header = ({loading}) => {
  return (
    <div>
      <h1 className="branding">RSS Inventory Platform
      {loading && <LoadingDots interval={100} dots={20} />}
      </h1>
      <Bread />
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
