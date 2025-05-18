let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs["USD"];
    return euros * oneEuroIs["JPY"].toFixed(2);
};

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs["USD"].toFixed(2);
};

const fromYenToPound = (yen) => {
    const euros = yen / oneEuroIs["JPY"];
    return euros * oneEuroIs["GBP"].toFixed(2);
};

module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}