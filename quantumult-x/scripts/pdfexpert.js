// PDF Expert 乌克兰
// copied from https://github.com/Peng-Lx/lxpscript/blob/0cd3f2f660da9e364b39dc3763ea57c8895a49aa/JS/langkhach/Pdfexpert.js

var obj= {
  "originalTransactionId": "20000618444996",
  "subscriptionState": "trial",
  "isInGracePeriod": false,
  "subscriptionExpirationDate": "13:15 03/11/2099",
  "subscriptionAutoRenewStatus": "autoRenewOn",
  "isEligibleForIntroPeriod": false,
  "isPDFExpert6User": false,
  "subscriptionReceiptId": "1572178404000"
};

$done({body: JSON.stringify(obj)});