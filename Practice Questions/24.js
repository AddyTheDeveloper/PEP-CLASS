// Question 24: Convert an array of prices to prices with 18% GST added.

const prices = [100, 200, 500, 1000];

const pricesWithGST = prices.map(price => price + (price * 0.18));

console.log("Original prices:", prices);
console.log("Prices with 18% GST:", pricesWithGST);
