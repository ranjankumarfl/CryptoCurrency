
// Fetch Data
function FetchData() {
    // DOM element
    let BTC = document.querySelector('#BTC');
    let ETH = document.querySelector('#ETH');
    let USDT = document.querySelector('#USDT');
    let Data;

    fetch("https://api.coinbase.com/v2/exchange-rates?currency=INR")
    .then(response=>response.json())
    .then(response=>
        {
            Data = response;
            console.log(Data.data.rates["BTC"])

            BTC.textContent = `₹${Math.floor(1/(Data.data.rates["BTC"]))}`;
            ETH.textContent = `₹${Math.floor(1/(Data.data.rates["ETH"]))}`;
            USDT.textContent = `₹${Math.floor(1/(Data.data.rates["USDT"]))}`;

            // BTC.innerHTML = `₹${1/Data.rates[BTC]}`;
        }
    )

    // BTC.innerHTML = `₹${1/Data.rates[BTC]}`;
    console.log(BTC, ETH, USDT)    
}

FetchData();




