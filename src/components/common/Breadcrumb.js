
import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { withRouter, Link } from 'react-router';

const Bread = ({ routes }) => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">
        <Icon type="home" />
      </Breadcrumb.Item>

      {routes.map((item, index) =>
        <span key={index}>
          <Link
            onlyActiveOnIndex={true}
            activeClassName="breadcrumb-active"
            to={item.path || ''}>
            {item.component && item.component.title}
          </Link>
        </span>
      )}


    </Breadcrumb>

  );
};


export default withRouter(Bread);
