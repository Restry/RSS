import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, Table, About, CoursesPage, ManageCoursePage } from 'containers';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="manage/:id" component={Table} />
    <Route path="about" component={About} />
  </Route>
);
