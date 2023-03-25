let dados = require('./dados.json');

let lowerValue = Infinity;
let highestValue = 0;
let businessDayBills = [];

function lowestMonthlyBilling(day) {
  if (day.valor < lowerValue && day.valor > 0) {
    lowerValue = day.valor;
  }
}

function highestBillingOfMonth(day) {
  if (day.valor > highestValue) {
    highestValue = day.valor;
  }
}

dados.forEach(day => {
  lowestMonthlyBilling(day)
  highestBillingOfMonth(day)

  if (day.valor != 0) businessDayBills.push(day);
})

const totalRevenue = businessDayBills.reduce((acc, current) => {
  return acc += current.valor;
}, 0);

const averageRevenue = totalRevenue / businessDayBills.length;

const numberOfDaysGreaterThanAverage = businessDayBills.reduce((acc, current) => {
  if (current.valor > averageRevenue) {
    return acc + 1;
  };
  return acc;
}, 0)

console.log(`O menor valor de faturamento ocorrido em um dia do mês foi: ${lowerValue}`)
console.log(`O maior valor de faturamento ocorrido em um dia do mês foi: ${highestValue}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${numberOfDaysGreaterThanAverage}`)

