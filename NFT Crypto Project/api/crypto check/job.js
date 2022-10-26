const apiAccess = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";


const runData = () => {
    let cryptoData;
    fetch(apiAccess)
        .then((response) => response.json())
        .then((response) => {
            cryptoData = response, console.log(cryptoData);
            for (let i = 0; i < cryptoData.length; i++) {
                const element = cryptoData[i];
                console.log(element);
                let entryDate = '<div class="coindetails"><p>This is the coin name:' + element.id + '</p><br/><p>This is the coin price: $' + element.current_price + ' </p><br/><p>other details are:</p></div>'
                document
                    .querySelector(".coindetails")
                    .insertAdjacentHTML("beforeend", entryDate);
            }
        })
}
runData();

