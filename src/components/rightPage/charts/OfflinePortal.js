import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { OfflinePortalOptions } from './options';

class OfflinePortal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { offlinePortalData } = this.props;
    return (
      <div
        style={{
          width: '5.375rem',
          height: '2.875rem',
        }}>
        <Chart
          renderer={renderer}
          option={OfflinePortalOptions(offlinePortalData)}
        />
      </div>
    );
  }
}

export default OfflinePortal;
