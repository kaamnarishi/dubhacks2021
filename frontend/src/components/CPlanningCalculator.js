import React, { PureComponent } from 'react';
import { getComponentFromId } from '../dashboardComponents';

export class CPlanningCalculator extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}
