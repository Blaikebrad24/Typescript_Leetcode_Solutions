var stockPricesArray = [7, 6, 4, 3, 1];
function BuyAndSellStockTwo(stockPrices) {
    if (!stockPrices || stockPrices.length == 0) {
        return 0;
    }
    var profit = 0;
    var i = 0;
    while (i < stockPrices.length) {
        if (stockPrices[i + 1] > stockPrices[i]) {
            profit += stockPrices[i + 1] - stockPrices[i];
        }
        i++;
    }
    return 1;
}
console.log(BuyAndSellStockTwo(stockPricesArray));
