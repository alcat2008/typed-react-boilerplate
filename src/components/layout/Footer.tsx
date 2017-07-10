import * as React from 'react';
import './footer.less';

class Footer extends React.PureComponent<any, any> {
  render() {
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>说明</h2>
            <div>This starter boilerplate is build with React and Redux.</div>
          </li>
          <li>
            <div>©2016 xxx</div>
            <div>xxx</div>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
