// 轻图
// copied from https://github.com/chxm1023/Rewrite/blob/main/qingtu.js

var chxm1023 = JSON.parse($response.body);

chxm1023 ={
  "result" : {
    "products" : [
      {
        "managed" : false,
        "status" : "ACTIVE",
        "startDate" : 1695261165000,
        "productId" : "com.photovision.camera.subscribe.plan.oneyear",
        "expireDate" : 4092599349000
      }
    ],
    "activated" : true
  }
};

$done({body : JSON.stringify(chxm1023)});