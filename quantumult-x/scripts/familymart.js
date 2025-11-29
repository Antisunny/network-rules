// copied from https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/FamilyMart.js

let obj=JSON.parse($response.body);
delete obj.data.topBanner ;
$done({body: JSON.stringify(obj)});