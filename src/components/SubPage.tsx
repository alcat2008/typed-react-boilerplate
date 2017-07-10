/**
 * Created by alcat on 04/07/2017.
 */
import React from 'react';

export interface SubPageProps {
  params?: any;
}

class SubPage extends React.PureComponent<SubPageProps, any> {
  render() {
    const { params } = this.props;
    return (
      <div>I am page {params && params.index}!</div>
    );
  }
}

export default SubPage;
