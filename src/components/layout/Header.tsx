/**
 * Created by alcat on 04/07/2017.
 */
import * as React from 'react';
import { Link } from 'react-router';
import * as classNames from 'classnames';
import './header.less';

export interface HeaderProps {
  location?: any;
}

class Header extends React.Component<HeaderProps, any> {
  constructor(props) {
    super(props);
    // initial state
    this.state = {};
  }

  render() {
    const activeMenuItem = this.props.location.pathname || '/';

    const menu = [
      <div id="nav" key="nav">
        <li className={classNames({ 'menu-item-selected': activeMenuItem === '/' })}>
          <Link to="/">Home</Link>
        </li>
        <li className={classNames({ 'menu-item-selected': activeMenuItem === '/foo' })}>
          <Link to="/foo">Foo</Link>
        </li>
        <li className={classNames({ 'menu-item-selected': activeMenuItem === '/page1' })}>
          <Link to="/page1">Page 1</Link>
        </li>
        <li className={classNames({ 'menu-item-selected': activeMenuItem === '/page2' })}>
          <Link to="/page2">Page 2</Link>
        </li>
      </div>,
    ];

    return (
      <header id="header">
        {menu}
      </header>
    );
  }
}

export default Header;
