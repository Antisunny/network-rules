// 有道词典
// copied from https://raw.githubusercontent.com/agkjVIP/QuantumultX-Rewrite-Rules/main/ydcd.js
// also https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/wyydcd.js [加密了]

var objc = JSON.parse($response.body);
objc = {
    "planIds": ["22"],
    "auto": true,
    "svipExpire": 0,
    "permissions": [
        "ONE_MONTH",
        "AUTO_SUBSCRIPTION"
    ],
    "expire": 9999999999999,
    "purchasedPlanIds": ["22"],
    "firstAuto": false,
    "tag": "TAG_RENEW_EXPECTED",
    "vip": true,
    "svip": false,
    "open": true,
    "copyWritings": [
        "阿甘科技解锁",
        "QQ群：773554575"
    ]
};
$done({ "body": JSON.stringify(objc) });