import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  let enhancer = applyMiddleware(thunk);

  if (__DEVELOPMENT__) {
    const DevTools = require('../helpers/DevTools');
    enhancer = compose(
      //你要使用的中间件，放在前面
      applyMiddleware(thunk),
      //必须的！启用带有monitors（监视显示）的DevTools
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      // reduxImmutableStateInvariant()
    );
  }

  return createStore(
    rootReducer,
    initialState,
    enhancer
  );
}
