import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Table, Item,ItemDetails, About, CoursesPage, ManageCoursePage } from 'containers';


export default (
  <Route path="/" breadcrumbName="主页" component={App}>
    <IndexRoute component={Home} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="manage/:id" name="manage" breadcrumbName="主数据-:id">
      <IndexRoute component={Table} />
      <Route path="detail" breadcrumbName="新建" component={Item} />
      <Route path="detail/:itemID" breadcrumbName="详细-:itemID" component={Item} />
      <Route path="itemDetails" breadcrumbName="新建" component={ItemDetails} />
      <Route path="itemDetails/:itemID" breadcrumbName="详细-:itemID" component={ItemDetails} />
    </Route>
    <Route path="about" component={About} />
  </Route>
);
