import * as React from 'react';
import * as ReactDOM from 'react-dom';
import AppContainer from './containers';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.less';

ReactDOM.render(
  <AppContainer />,
  document.getElementById('root') as HTMLElement,
);

if (__DEV__) {
  // const Perf = require('react-addons-perf');

  (window as any).React = React;
  // (window as any).Perf = Perf;
}

registerServiceWorker();
