// const https = require('https');
const coingecko = require('coingecko-api')


console.log("work");

var options = {
    "method": "GET",
    "hostname": "rest.coinapi.io",
    "path": "/v1/exchangerate/BTC/USD",
    "headers": { 'X-CoinAPI-Key': '28A99E7E-E9DE-443E-8248-49FD52CD4FD0' }
};

var request = () => ((options, function (response) {
    var chunks = [];
    response.on("data", function (chunk) {
        chunks.push(chunk);
        console.log(chunk);
    });
}));

request();

const getHistoricalPrice = async event => {
    let currency1API = "bitcoin";
    let indexDate = "01-01-2020";
    let string = "https://api.coingecko.com/api/v3/coins/" + currency1API + "/history?date=" + indexDate + "&localization=false";
    await fetch(string)
        .then(resp => resp.json())
        .then(data => console.log(data.market_data.current_price.usd))
}

console.log(getHistoricalPrice);

// var details;
// const loader = document.querySelector(".loader img");
// const proxy = "https://cors-anywhere.herokuapp.com/";
// fetch(`${proxy}http://arbeitnow.com/api/job-board-api`)
//     .then((response) => response.json())
//     .then((data) => {
//         details = data.data;
//     });