/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';
import { load } from './reducers/info';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/default.less';
import DevTools from './helpers/DevTools';
const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
store.dispatch(load());

// if (__DEVELOPMENT__) {
//   render(
//     <Provider store={store}>
//       <div>
//         <Router history={browserHistory} routes={routes} />
//         <DevTools />
//       </div>
//     </Provider>,
//     document.getElementById('app')
//   );
// } else {
  render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
  );
// }
