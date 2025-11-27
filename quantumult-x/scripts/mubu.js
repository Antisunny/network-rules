// 幕布
// copied from https://github.com/89996462/Quantumult-X/blob/main/ycdz/mubu.js

var body = $response.body
    .replace(/vipEndDate":""/g,'vipEndDate":"99999999"')
    .replace(/level":\d+/g,'level":1')

$done({ body });