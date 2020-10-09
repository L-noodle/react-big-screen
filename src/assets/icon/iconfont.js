import { createGlobalStyle } from 'styled-components';

export const Iconstyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1600868300505'); /* IE9 */
  src: url('iconfont.eot?t=1600868300505#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('iconfont.woff?t=1600868300505') format('woff'),
  url('iconfont.ttf?t=1600868300505') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('iconfont.svg?t=1600868300505#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-supervise:before {
  content: "\e777";
}

.icon-chart-pie-alt:before {
  content: "\e78c";
}

.icon-chart-area:before {
  content: "\e78f";
}

.icon-chart-line:before {
  content: "\e790";
}

.icon-chart-bar:before {
  content: "\e791";
}

.icon-laptop:before {
  content: "\e797";
}

.icon-layer-group:before {
  content: "\e7f7";
}

.icon-lock:before {
  content: "\e7fb";
}

.icon-align-left:before {
  content: "\e7fd";
}

.icon-border-bottom:before {
  content: "\e7fe";
}

.icon-clouddownload:before {
  content: "\e81b";
}

.icon-cloudupload:before {
  content: "\e81c";
}

.icon-rank:before {
  content: "\e86a";
}

.icon-early-warning:before {
  content: "\e86e";
}

.icon-vector:before {
  content: "\e888";
}

.icon-monitoring:before {
  content: "\e88e";
}

.icon-diagnose:before {
  content: "\e88f";
}

.icon-Directory-tree:before {
  content: "\e892";
}

.icon-application:before {
  content: "\e89e";
}
`;
