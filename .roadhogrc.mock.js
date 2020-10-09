const fs = require('fs');
const path = require('path');
const mockPath = path.join(__dirname + '/mock');

const mock = {};

// 遍历导出mock数据
fs.readdirSync(mockPath).forEach(file => {
  Object.assign(mock, require('./mock/' + file));
});

module.exports = mock;
