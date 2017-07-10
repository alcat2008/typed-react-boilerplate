import * as React from 'react';
import { connect } from 'react-redux';

import { Header, Footer } from '../components';

import './app.less';

export class App extends React.Component {
  render() {
    const { children, ...restProps } = this.props;
    return (
      <div>
        <Header {...restProps} />
        <div className="app-content">{children}</div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  routing: state.routing,
});

export default connect(mapStateToProps)(App);
