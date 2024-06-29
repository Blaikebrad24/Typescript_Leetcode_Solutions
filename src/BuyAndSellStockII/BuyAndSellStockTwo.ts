
let stockPricesArray: number[] = [7,6,4,3,1];
function BuyAndSellStockTwo(stockPrices:number[]): number {

    if(!stockPrices || stockPrices.length ==0){return 0;}

    let profit: number = 0;
    let i = 0;
    while(i < stockPrices.length)
    {
        if(stockPrices[i+1]! > stockPrices[i]!)
        {
            profit += stockPrices[i+1]! - stockPrices[i]!
        }
        i++;
    }

    return profit;
}

console.log(BuyAndSellStockTwo(stockPricesArray));