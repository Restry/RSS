
import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { withRouter, Link } from 'react-router';


function itemRender(route, params, routes, paths) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? <span>{route.breadcrumbName}</span> : <Link to={route.path}>{route.breadcrumbName}</Link>;
}

const Bread = ({ routes ,params}) => {
  return (
    <Breadcrumb routes={routes} params={params} />
  );
};
/*      <Breadcrumb.Item href="/">
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


    </Breadcrumb> */

export default withRouter(Bread);
