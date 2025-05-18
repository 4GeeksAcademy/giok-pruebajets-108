 
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test ("un dollar son 146.26 yens", () => {
    const yens = fromDollarToYen(1);
    const expectedYens = (1 / 1.07) * 156.5;
    expect (yens.toFixed(2)).toBe(expectedYens.toFixed(2));
});


test ("un euro son 1.07 dollars ", () => {
    const dollars = fromEuroToDollar (1);
    const expectedDollars = 1 * 1.07;
    expect (dollars.toFixed(2)). toBe(expectedDollars.toFixed(2));
});


test ("mil yenes son 5,56 pouns ", () => {
    const pouns = fromYenToPound(1000);
    const expectPounds = (1000 / 156.5) * 0.87;
    expect (pouns.toFixed(2)). toBe(expectPounds.toFixed(2));
});