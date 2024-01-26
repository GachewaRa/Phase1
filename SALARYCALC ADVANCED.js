// Advanced Stage Refactoring (Corrected)

const calculateNHIF = grossSalary => {
    const nhifRates = [1700, 1600, 1500, 1400, 1300, 1200, 1100, 1000, 950, 900, 850, 750, 600, 500, 400, 300];
    return nhifRates.find(rate => grossSalary >= rate) || 150;
  };
  
  const calculatePAYE = (annualIncome, brackets) => brackets.reduce((tax, bracket) => {
    const { limit, rate } = bracket;
    return annualIncome > limit ? tax + rate * (annualIncome - limit) : tax;
  }, 0);
  
  const bSalary = 90000;
  const allowances = 40000;
  
  const gSalary = bSalary + allowances;
  const reducedGrossSalary = gSalary - 1080;
  
  const hfund = 0.015 * reducedGrossSalary;
  const nssf = Math.min(6000, 0.06 * reducedGrossSalary);
  const nhif = calculateNHIF(reducedGrossSalary);
  
  const taxableIncome = reducedGrossSalary - (hfund + nhif + nssf);
  
  const taxBrackets = [
    { limit: 28800, rate: 0.1 },
    { limit: 388000, rate: 0.3 },
    { limit: 6000000, rate: 0.325 },
    { limit: 9600000, rate: 0.35 }
  ];
  
  const annualTaxIncome = taxableIncome * 12;
  const paye = calculatePAYE(annualTaxIncome, taxBrackets);
  
  const remittance = paye - 28800; // Corrected remittance calculation
  console.log(`Your PAYE is: ${remittance}, NHIF is: ${nhif}, NSSF is: ${nssf}, HOUSING FUND is: ${hfund}`);
  