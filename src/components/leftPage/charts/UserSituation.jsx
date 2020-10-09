import React, { PureComponent } from 'react';
import { userOptions } from './options';
import { ScrollBoard } from '@jiaminghi/data-view-react';

class UserSituation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      config: {
        // 表头背景色
        headerBGC: '#443dc5',
        // 奇数行背景色
        oddRowBGC: '#09184F',
        // 偶数行背景色
        evenRowBGC: '#070C34',
        // 行号
        index: true,
        // 行号表头
        indexHeader: '序号',
        // 宽度
        columnWidth: [50, 100, 200],
        // 对其方式
        align: ['center'],
        // 表行数
        rowNum: 10,
      },
    };
  }

  render() {
    const { userSitua } = this.props;
    const config = {
      ...this.state.config,
      ...userOptions(userSitua),
    };

    return (
      <div>
        {userSitua ? (
          <ScrollBoard
            config={config}
            style={{
              width: '5.475rem',
              height: '6.875rem',
            }}></ScrollBoard>
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default UserSituation;
