// Xmind-思维导图
// copied from https://github.com/chxm1023/Rewrite/blob/main/Xmind.js

var content = JSON.parse($response.body);
const vip = /https:\/\/www\.xmind\.cn\/_res\/devices/;
const token = /https:\/\/xmind\.cn\/_res\/token\/.+/;

if (vip.test($request.url)) {
    content = {
      "license" : {
        "status" : "sub",
        "expireTime" : 4092599349000
      },
      "_code" : 200,
      "raw_data" : "GfxYgAqnrQ\/ggD9UwqnZyAj6FKnopXzM8s5m3eZLOsmVr4FwCzv41qTmgi\/u72cv+jpaAoljaEPti1twzOS7X7KUPY1KNJ2xalbS7SXbvFHSvs21QXjaUtIOkeJWAl4\/vHl4IvMeHTBVqD8mFCXOmvnBPLRMAJEPgHEJYF1InvQ="
    };
}

if (token.test($request.url)) {
    content.expireDate = 4092599349;
    content.token = "f50633ea8eb04cbb85962b99c47045d7AjOobEGo";
}

$done({body : JSON.stringify(content)});