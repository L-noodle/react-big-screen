import React, { PureComponent } from 'react';
import { CapsuleChart } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 单位
        unit: '（人）',
        showValue: false,
        data: [],
      },
    };
  }
  render() {
    const { userIdentityCategory } = this.props;
    const config = {
      ...this.state.config,
      ...userIdentityCategory,
    };
    return (
      <div>
        {userIdentityCategory ? (
          <CapsuleChart
            config={config}
            style={{
              width: '5.85rem',
              height: '2.625rem',
            }}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
