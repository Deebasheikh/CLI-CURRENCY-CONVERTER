#!/usr/bin/env
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: { rate: 1, symbol: "$" }, //BASE CURRENCY
    EUR: { rate: 0.91, symbol: "€" },
    GBP: { rate: 0.76, symbol: "£" },
    INR: { rate: 74.57, symbol: "₹" },
    PKR: { rate: 280, symbol: "Rs" },
    CAD: { rate: 1.359049, symbol: "CA$" },
    SGD: { rate: 1.348826, symbol: "S$" },
    JPY: { rate: 151.625636, symbol: "¥" },
    CNY: { rate: 7.233266, symbol: "¥" },
    SAR: { rate: 3.75, symbol: "﷼" },
    OMR: { rate: 0.38, symbol: "﷼" },
    NZD: { rate: 1.66, symbol: "$" },
    KWD: { rate: 3.251815, symbol: "د.ك" },
    AED: { rate: 3.67, symbol: " د.إ" },
    YER: { rate: 250.45, symbol: "﷼" },
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Convert from Currency",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "PKR",
            "CAD",
            "SGD",
            "JPY",
            "CNY",
            "SAR",
            "OMR",
            "NZD",
            "KWD",
            "AED",
            "YER",
        ],
    },
    {
        name: "to",
        message: "Convert to Currency",
        type: "list",
        choices: [
            "USD",
            "EUR",
            "GBP",
            "INR",
            "PKR",
            "CAD",
            "SGD",
            "JPY",
            "CNY",
            "SAR",
            "OMR",
            "NZD",
            "KWD",
            "AED",
            "YER",
        ],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from].rate; //exchange rate
let toAmount = currency[user_answer.to].rate; //exchange rate
let newAmount = parseFloat(user_answer.amount);
let baseAmount = newAmount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(chalk.bgWhite.magenta.bold.italic(`Converted amount: ${parseFloat(convertedAmount.toFixed(2))} ${currency[user_answer.to].symbol}`));
// console.log(fromAmount)
// console.log(toAmount)
// console.log(amount)
// console.log(convertedAmount)
