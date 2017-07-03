import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);


if (__DEV__) {
  const Perf = require('react-addons-perf');

  (window as any).React = React; // tslint:disable-line
  (window as any).Perf = Perf; // tslint:disable-line
}

registerServiceWorker();
