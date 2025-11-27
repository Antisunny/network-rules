// 尽简衣橱
// copied from https://github.com/chxm1023/Rewrite/blob/main/jjyc.js

var content = JSON.parse($response.body);
const user = /users\/profile/;
const receipt = /apple_app_store\/resolve_receipt/;
const payments = /payments\/orders\/sync_from_apple_app_store/;

if(user.test($request.url)){
  content.data.premium_profile = {
    "apple_app_store_is_auto_renew" : true,
    "type_text" : "永久会员",
    "expired_at" : null,
    "type" : "studio.2players.wardrobe.pro.lifetime",
    "show_subscription_management" : false,
    "apple_app_store_is_receipt_bound" : true
  };
}

if(receipt.test($request.url)){
  content.data = {
    ...content.data,
    "type_text" : "永久会员",
    "expired_at" : null,
    "apple_app_store_auto_renew" : true,
    "type" : "studio.2players.wardrobe.pro.lifetime"
  };
}

if(payments.test($request.url)){
  content = {
    "message" : "恢复成功",
    "status" : "success"
  };
}

$done({body : JSON.stringify(content)});