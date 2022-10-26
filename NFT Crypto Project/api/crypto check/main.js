// const getData = () => {
//     fetch("/v1/exchangerate/BTC?apikey=28A99E7E-E9DE-443E-8248-49FD52CD4FD0")
//         .then((response) => response.json())
//         .then((response) => console.log(response))
// }


// getData()

var apikey = {
    key: 'fc9ea731-8fca-4c2d-8dde-b2079ac7c05f'
}
var jsonresponse;
var statuscode = "status:data"

// request('GET', 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
request('GET', 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        jsonresponse = response.target.responseText
        console.log(jsonresponse);
        document
            .querySelector(".enterhere")
            .insertAdjacentHTML("beforeend", jsonresponse.status.data);
    }).catch()

function request(method, url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    })
}
// MY KEY: 28A99E7E-E9DE-443E-8248-49FD52CD4FD0
// const https = require('https');

// var options = {
//     "method": "GET",
//     "hostname": "rest.coinapi.io",
//     "path": "/v1/exchanges",
//     "headers": { 'X-CoinAPI-Key': '28A99E7E-E9DE-443E-8248-49FD52CD4FD0' }
// };

// var request = https.request(options, function (response) {
//     var chunks = [];

//     response.on("data", function (chunk) {
//         chunks.push(chunk);
//     });

// });

// request.end();