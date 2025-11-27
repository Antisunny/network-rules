// 虫虫吉他 https://www.ccguitar.cn/
// copied from https://github.com/89996462/Quantumult-X/blob/main/ycdz/lzjoy.js

var body = $response.body.replace(/vip":"0"/g,'vip": "1"')
    .replace(/expire_date":""/g,'expire_date": "2030-11-11"')
    .replace(/buy":"0"/g,'buy": "1"')
    .replace(/nickname":".*?"/g,'nickname":"彭于晏Crack"')
$done({ body });