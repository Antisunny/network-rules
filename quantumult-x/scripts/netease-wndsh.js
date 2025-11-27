// 网易蜗牛读书
// copied from https://github.com/chxm1023/Rewrite/blob/main/wywnds.js
// also https://github.com/89996462/Quantumult-X/blob/main/ycdz/yywnds.js

var body=$response.body;

chxm1023 = body.replace(/tradeEndTime\":\d+/g,'tradeEndTime":4092599349000');

$done(chxm1023);