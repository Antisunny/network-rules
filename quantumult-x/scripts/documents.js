// documents
// https://license.pdfexpert.com/api/1.0/documents/subscription/refresh
// copied from https://github.com/Alex0510/Eric/blob/Alex0510surge/surge/Script/documents.js
// also https://github.com/Peng-Lx/lxpscript/blob/master/JS/documents.js

var obj = JSON.parse($response.body);

obj ={
    "isEligibleForIntroPeriod":true,
    "originalTransactionId":"689300364339354",
    "subscriptionExpirationDate":"12:25 12/12/2029",
    "subscriptionState":"active",
    "subscriptionReceiptId":"152304284583",
    "isDocuments6User":true,
    "subscriptionAutoRenewStatus":"autoRenewOff",
    "isInGracePeriod":true
}
$done({body: JSON.stringify(obj)});