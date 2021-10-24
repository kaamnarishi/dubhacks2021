import React, { PureComponent } from 'react';
import { getComponentFromId } from '../homepageComponents';

export class CHomeDashboard extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}
