// https://tripsy.app/
// copied from https://github.com/chxm1023/Rewrite/blob/main/tripsy.js

if ($response.body != 'undefined'){
    var chxm1023 = JSON.parse($response.body);
    chxm1023 = {
        "is_premium":true,
        "expiration_intent":0,
        "is_trial":true,
        "subscription":"premium.yearly.29.99.v4",
        "expiration_date":"2099-09-09T09:09:09Z",
        "is_introductory_offer":false,
        "is_in_billing_retry_period":false
    };
    $done({body:JSON.stringify(chxm1023)})
};
$done();