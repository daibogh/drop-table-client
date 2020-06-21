/* eslint-disable import/no-default-export */
import React from 'react';
import { withRouter } from 'react-router-dom';


class ErrorBoundary extends React.Component<any, any> {
  componentDidCatch() {
    const { history } = this.props;
    history.push('/');
  }
  render() {
    return <>{this.props.children}</>;
  }
}

export default withRouter(ErrorBoundary);