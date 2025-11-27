// 牛津高阶词典第十版
// copied from https://github.com/89996462/Quantumult-X/blob/main/ycdz/ljgjcd.js

var body = JSON.parse($response.body);

body.data.user.is_vip = 1;
body.data.user.expire_date = "9999-12-31 04:01:05";

$done({ body: JSON.stringify(body) });