const apiAccess = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";


const runData = () => {
    let cryptoData;
    fetch(apiAccess)
        .then((response) => response.json())
        .then((response) => {
            cryptoData = response, console.log(cryptoData);
            for (let i = 0; i < cryptoData.length - 80; i++) {
                const element = cryptoData[i];
                console.log(element);
                let entryDate = '<table><tr><td class="coinandimage"><img src=" ' + element.image + ' "/>' + element.id + '</td><td>$' + element.current_price + '</td><td>$' + element.market_cap + '</td><td>%' + element.price_change_24h + '</td><td>' + element.market_cap_rank + '</td></tr></table>'
                document
                    .querySelector("table")
                    .insertAdjacentHTML("beforeend", entryDate);
            }
        })
}
runData();