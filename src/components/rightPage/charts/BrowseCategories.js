import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { BrowseCategoriesOptions } from './options';

// 关联数据类别
class BrowseCategories extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
    };
  }

  render() {
    const { renderer } = this.state;
    const { browseCategories } = this.props;
    return (
      <div
        style={{
          width: '5.375rem',
          height: '2.5rem',
        }}>
        {browseCategories ? (
          <Chart
            renderer={renderer}
            option={BrowseCategoriesOptions(browseCategories)}
          />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default BrowseCategories;
