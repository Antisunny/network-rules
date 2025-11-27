// Hyperweb Safari浏览器扩展
// https://guide.hyperweb.app/
// copied from https://github.com/chxm1023/Rewrite/blob/main/Hyperweb.js

var chxm1023 = JSON.parse($response.body);

chxm1023 = {
  "autoRenewStatus" : "1",
  "isActive" : true,
  "expireDateMs" : 4092599349000,
  "expirationIntent" : null,
  "productId" : "ai.laso.ios.HyperWeb.yearly.subscription"
};

$done({body : JSON.stringify(chxm1023)});