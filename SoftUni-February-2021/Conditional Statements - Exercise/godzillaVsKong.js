function godzillaVsKong(input){
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothingPriceFor1extras = Number(input[2]);

    let decor = budget - (budget * 0.90);
    let clothingPrice = extras * clothingPriceFor1extras;

    if (extras > 150){
        clothingPrice = clothingPrice - (clothingPrice * 0.10);
    };
    
    totalForTheMovie = decor + clothingPrice;
    finalSum = budget - totalForTheMovie;
    finalSum = Math.abs(finalSum)

    if (budget >= totalForTheMovie){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${finalSum.toFixed(2)} leva left.`);
    } else {
        
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${finalSum.toFixed(2)} leva more.`)
    }
    
}

godzillaVsKong(["20000",
"120",
"55.5"])




