let salary;
let benefits;
let grossSalary;
let tax;
let nhif;
let nssf;
let tax1;
let tax2;
let tax3;
let tax4;


salary =parseInt(prompt("Enter your salary"));
benefits = parseInt(prompt("Enter your Benefits"))

grossSalary = salary + benefits;


function taxCompute(rate){
    return(grossSalary * rate)/100
}

tax = function calculateIncomeTax(){
    if(grossSalary<= 24000){
        return taxCompute(10);
    }
    else if(grossSalary <= 32333){
        tax1 = taxCompute(25);
        return tax1
    }
    else if(grossSalary <= 500000){
        grossSalary = grossSalary -30000
        tax2 = taxcompute(30) + tax1;
        return tax2;
    }
    else if(grossSalary <= 8000000){
        grossSalary = grossSalary - 30000
        tax3 = taxCompute(32.5) + tax2 + tax1;
        return tax2
    }
    else if(grossSalary > 80000){
       grossSalary = grossSalary -30000
       tax4 = taxCompute(35) + tax3 + tax2 + tax1;
       return tax4; 
    }
}
console.log(`The tax is ${tax()}`);