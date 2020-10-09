/*
 * ECharts 组件基础部分
 * 传入 option 和渲染方式 renderer
 * */

import React, { PureComponent } from 'react';
import * as echarts from 'echarts';
import 'zrender/lib/svg/svg';
import { debounce } from './index'; // 一个节流函数

export default class Chart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%',
    };
    this.chart = null;
  }
  async componentDidMount() {
    // 初始化图表
    await this.initChart(this.el);
    // 将传入的配置(包含数据)注入
    this.setOption(this.props.option);
    // 监听屏幕缩放，重新绘制 echart 图表
    window.addEventListener('resize', debounce(this.resize, 100));
  }

  componentDidUpdate() {
    // 每次更新组件都重置
    this.setOption(this.props.option);
  }

  componentWillUnmount() {
    // 组件卸载前卸载图表
    this.dispose();
  }
  render() {
    const { width, height } = this.state;

    return (
      <div
        className='default-chart'
        ref={el => (this.el = el)}
        style={{ width, height }}
      />
    );
  }
  initChart = el => {
    // renderer 用于配置渲染方式 可以是 svg 或者 canvas
    const renderer = this.props.renderer || 'canvas';

    return new Promise(resolve => {
      setTimeout(() => {
        this.chart = echarts.init(el, null, {
          renderer,
          width: 'auto',
          height: 'auto',
        });
        resolve();
      }, 0);
    });
  };
  setOption = option => {
    if (!this.chart) {
      return;
    }

    const notMerge = this.props.notMerge;
    const lazyUpdate = this.props.lazyUpdate;

    this.chart.setOption(option, notMerge, lazyUpdate);
  };
  dispose = () => {
    if (!this.chart) {
      return;
    }

    this.chart.dispose();
    this.chart = null;
  };
  resize = () => {
    this.chart && this.chart.resize();
  };
  getInstance = () => {
    return this.chart;
  };
}
