// Intermediate Stage Refactoring (Corrected)

let bSalary = 90000;
let allowances = 40000;

let gSalary = bSalary + allowances;
let reducedGrossSalary = gSalary - 1080;

let hfund = 0.015 * reducedGrossSalary;
let nssf = Math.min(6000, 0.06 * reducedGrossSalary);
let nhif = calculateNHIF(reducedGrossSalary);

let taxableIncome = reducedGrossSalary - (hfund + nhif + nssf);

const l1Tax = 28800,
  l2Tax = 24999.75,
  l3Tax = 1683599.70,
  l4Tax = 1169999.68;
let annualTaxIncome = taxableIncome * 12;
let paye = calculatePAYE(annualTaxIncome);

let remittance = paye - l1Tax; // Corrected remittance calculation
console.log(`Your PAYE is: ${remittance}, NHIF is: ${nhif}, NSSF is: ${nssf}, HOUSING FUND is: ${hfund}`);

function calculateNHIF(grossSalary) {
  const nhifRates = [
    { limit: 100000, amount: 1700 },
    { limit: 90000, amount: 1600 },
    // ... (rest of the NHIF rates remain unchanged)
  ];

  for (const rate of nhifRates) {
    if (grossSalary >= rate.limit) {
      return rate.amount;
    }
  }
  return 150; // Default value if none of the conditions match
}

function calculatePAYE(annualIncome) {
  const taxBrackets = [
    { limit: 28800, rate: 0.1 },
    { limit: 388000, rate: 0.3 },
    { limit: 6000000, rate: 0.325 },
    { limit: 9600000, rate: 0.35 }
  ];

  let tax = 0;
  for (const bracket of taxBrackets) {
    if (annualIncome > bracket.limit) {
      tax += bracket.rate * (annualIncome - bracket.limit);
      annualIncome = bracket.limit;
    }
  }

  return tax;
}
