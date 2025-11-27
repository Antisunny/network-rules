// 猫头鹰文件
// copied from https://github.com/chxm1023/Rewrite/blob/main/mtywj.js
// also https://github.com/89996462/Quantumult-X/blob/main/ycdz/mtywj.js
body = $response.body
    .replace(/\"memberLevel":(.*?)/g, '\"memberLevel":3')
    .replace(/\"succ":"(.*?)"/g, '\"succ":"true"')
    .replace(/\"dispName":"(.*?)"/g, '\"dispName":"chxm1023"')
    .replace(/\"expireAt":"(.*?)"/g, '\"expireAt":"4092599349000"')

$done({body});