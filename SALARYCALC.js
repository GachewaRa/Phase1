//program to calculate taxes
let gSalary, bSalary=90000, allowances=40000, nhif, nssf, hfund, taxableIncome, paye;
gSalary=bSalary + allowances;
let reducedGrossSalary = gSalary - 1080;
hfund=0.015*reducedGrossSalary;

    nssf=0.06*reducedGrossSalary;
    if(nssf>6000){
        nssf=6000;
    }

    if(reducedGrossSalary>=100000){nhif=1700}
    else if(reducedGrossSalary>=90000){nhif=1600}
    else if(reducedGrossSalary>=80000){nhif=1500}
    else if(reducedGrossSalary>=70000){nhif=1400}
    else if(reducedGrossSalary>=60000){nhif=1300}
    else if(reducedGrossSalary>=50000){nhif=1200}
    else if(reducedGrossSalary>=45000){nhif=1100}
    else if(reducedGrossSalary>=40000){nhif=1000}
    else if(reducedGrossSalary>=35000){nhif=950}
    else if(reducedGrossSalary>=30000){nhif=900}
    else if(reducedGrossSalary>=25000){nhif=850}
    else if(reducedGrossSalary>=20000){nhif=750}
    else if(reducedGrossSalary>=15000){nhif=600}
    else if(reducedGrossSalary>=12000){nhif=500}
    else if(reducedGrossSalary>=8000){nhif=400}
    else if(reducedGrossSalary>=6000){nhif=300}
    else{nhif=150}
    

taxableIncome=reducedGrossSalary-(hfund+nhif+nssf);

    const l1Tax=28800, l2Tax=24999.75, l3Tax=1683599.70, l4Tax=1169999.68;
    let annualTaxIncome=taxableIncome*12;
    if(annualTaxIncome>9600000){
paye=l1Tax+l2Tax+l3Tax+l4Tax+0.35*(annualTaxIncome-9600000);
    }
    else if(annualTaxIncome>6000000){
        paye=l1Tax+l2Tax+l3Tax+0.325*(annualTaxIncome-6000001);
}
else if(annualTaxIncome>388000){
    paye=l1Tax+l2Tax+0.3*(annualTaxIncome-388001);
}
else if(annualTaxIncome>288000){
    paye=l1Tax+0.25*(annualTaxIncome-288001);
}
else{
    paye=0.1*annualTaxIncome;
}


let remittance=paye-28800;
console.log("Your PAYE is:" +remittance, " NHIF is: "+nhif, " NSSF is: "+nssf, " HOUSING FUND is: "+hfund);