function depositCalculator(input){
    let depositedAmount = Number(input[0]);
    let termOfTheDeposit = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let result = depositedAmount * annualInterestRate * 0.01;
    let result2 = result / 12;
    let finalResult = depositedAmount + (termOfTheDeposit * result2);
console.log(finalResult);

}

depositCalculator([200, 3, 5.7]);