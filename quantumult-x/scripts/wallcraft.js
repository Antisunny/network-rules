// Wallcraft-动态壁纸
// copied from https://github.com/chxm1023/Rewrite/blob/main/Wall.js

let ddm = JSON.parse($response.body), id = "com.wallpaperscraft.wallpapers.year.1.5baks";

if(/verify_receipt\/remove_ads/.test($request.url)){
  ddm.items["all_time"] = {
    "type" : "nonconsumable",
    "is_active" : true
  };
  ddm.items[id] = {
    "type" : "subscription",
    "already_used_introductory_price" : false,
    "is_active" : true
  };
}

if(/products\/remove_ads/.test($request.url)){
  ddm = {
    "items" : {
      "nonconsumables" : [
        "all_time"
      ],
      "subscriptions" : [
        id
      ]
    }
  };
}

$done({body : JSON.stringify(ddm)});