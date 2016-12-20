import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import info from './info';
import table from './table';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses,
  authors,
  info,
  table,
  ajaxCallsInProgress
});

export default rootReducer;
