function convertCurrency() {
    var amount = parseFloat(document.getElementById("amount").value);
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            var conversionRate = data.rates[toCurrency];
            var convertedAmount = amount * conversionRate;
            document.getElementById("result").innerHTML = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
        })
        .catch(error => {
            console.log(error);
            document.getElementById("result").innerHTML = "An error occurred. Please try again later.";
        });
}
