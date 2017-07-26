/**
 * Created by alcat on 04/07/2017.
 */
import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { increase, decrease, increaseAsync, increaseByRequest } from '../actions/count';

import './home.less';

interface HomeProps {
  number: string;
  actions: any;
}

// eslint-disable-next-line
class Home extends React.Component<HomeProps, any> {
  static propTypes = {
    number: React.PropTypes.number,
  };

  render() {
    const { number, actions } = this.props; // tslint:disable-line
    return (
      <div>
        <div className="home-jump">
          <Link to="/foo">Go to foo</Link>
        </div>
        <div>
          Some state changes:
          <span className="home-count">{number}</span>
        </div>
        <div className="home-operator">
          <button className="btn-hover" onClick={() => actions.increase(1)}>Increase</button>
          <button className="btn-hover" onClick={() => actions.decrease(1)}>Decrease</button>
          <button className="btn-hover" onClick={() => actions.increaseAsync(1)}>Increase Async</button>
          <button className="btn-hover" onClick={() => actions.increaseByRequest(10)}>Increase by Request</button>
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line arrow-body-style
const mapStateToProps = state => ({
  number: state.count.number,
});

// eslint-disable-next-line arrow-body-style
const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators({
      increase,
      decrease,
      increaseAsync,
      increaseByRequest,
    }, dispatch),
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
