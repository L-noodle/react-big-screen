import React, { PureComponent } from 'react';
import Chart from '../../../utils/chart';
import { FeedbackOptions } from './options';

class Feedback extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      renderer: 'canvas',
      option: '',
    };
  }

  render() {
    const { renderer } = this.state;
    const { FeedbackData } = this.props;
    return (
      <div
        style={{
          width: '1.25rem',
          height: '1.25rem',
        }}>
        <Chart
          renderer={renderer}
          option={FeedbackOptions(FeedbackData)}
        />
        ;
      </div>
    );
  }
}

export default Feedback;
