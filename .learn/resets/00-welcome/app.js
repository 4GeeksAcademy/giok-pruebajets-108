const sum = (a,b) => {
    return a +b;
}

const result = sum (7,3);
console.log(result);

 
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = function(valueInEuro) {  
    let valueInDollar = valueInEuro * oneEuroIs.USD;  
    return valueInDollar;
}

const fromDollarToYen = function(valueInEuro) {  
    let valueInDollar = valueInEuro * oneDollarIs.JPY;  
    return valueInDollar;
}

const fromYenToPaund = function(valueInEuro) {  
    let valueInDollar = valueInEuro * oneDollarIs.JPY;  
    return valueInDollar;
}

 module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPaund }