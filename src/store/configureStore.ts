/**
 * Created by alcat on 04/07/2017.
 */
import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import * as promiseMiddleware from 'redux-promise';

import rootReducer from '../reducers';
const middleware = [routerMiddleware(hashHistory), thunkMiddleware, promiseMiddleware];

export default function configureStore(initialState: Object, onComplete?: () => void) {
  let finalCreateStore: any;
  let devEnhancer;
  if (__PROD__) {
    finalCreateStore = applyMiddleware(...middleware)(createStore);
  } else {
    /* eslint-disable global-require, import/no-extraneous-dependencies */
    // const devTools = require('remote-redux-devtools');
    const createLogger = require('redux-logger');
    const loggerMiddleware = createLogger({ duration: true });
    finalCreateStore = compose(
      applyMiddleware(...middleware, loggerMiddleware),
      // devTools({ realtime: true })
    )(createStore);

    devEnhancer = (window as any).devToolsExtension && (window as any).devToolsExtension();
  }

  const store = finalCreateStore(rootReducer, initialState, devEnhancer);
  onComplete && onComplete(); // tslint:disable-line

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store;
}
