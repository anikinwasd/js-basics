function yardGreening(input){
    let squareMeters = Number(input[0]);
    result = squareMeters * 7.61;
    let finalResult = result * 0.18;
    let finalPrice = result - finalResult
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${finalResult} lv.`);

}

yardGreening([550]);