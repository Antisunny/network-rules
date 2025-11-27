// 推糖-壁纸头像美图社区
// copied from https://github.com/chxm1023/Rewrite/blob/main/duitang2.js


var content = JSON.parse($response.body);

content.data.is_life_artist = true;
content.data.latest_vip_level = 11;
content.data.vip_end_at_mills = 4092599350000;
content.data.vip_end_at = 4092599350;
content.data.svip_mechanism = 1;
content.data.follow_count = 1000000;
content.data.score = 1000000;
content.data.be_follow_count = 1000000;
content.data.vip_level = 11;
content.data.vip = true;
content.data.can_edit_nickname = true;

$done({body : JSON.stringify(content)});