// 10. Write a program that starts with two values in two different variables: the cost of a product and its sales value. From the values, calculate how much profit (sales value less the cost of the product) the company will have when selling 1,000 of these products.
// Note that a 20% tax is levied on the cost of the product, which must be taken into account when calculating profit.
// Your program should also issue an error message and shut down if any of its input values are less than zero.
// The profit of a product is the result of subtracting the sale value from the cost of the product, and the 20% tax is also part of the cost value.
// totalCostValue = costValue + taxAboutCost
// profit = salesValue - TotalCost (profit of a product)

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, values cannot be negative");
};