function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFishermen = Number(input[2]);
    let result = ''

    switch (season){
        case "Spring":
            result = 3000
            if (numberOfFishermen <= 6){
                result = result - (result * 0.10);
            } else if (numberOfFishermen >= 7 && numberOfFishermen <= 11){
                result = result - (result * 0.15);
            } else {
                result = result - (result * 0.25);
            }
            if (numberOfFishermen % 2 == 0){
                result = result - (result * 0.05);
            }break;

        case "Summer":
            result = 4200
            if (numberOfFishermen <= 6){
                result = result - (result * 0.10);
            } else if (numberOfFishermen >= 7 && numberOfFishermen <= 11){
                result = result - (result * 0.15);
            } else {
                result = result - (result * 0.25);
            }
            if (numberOfFishermen % 2 == 0){
                result = result - (result * 0.05);
            }break;

        case "Autumn":
            result = 4200
            if (numberOfFishermen <= 6){
                result = result - (result * 0.10);
            } else if (numberOfFishermen >= 7 && numberOfFishermen <= 11){
                result = result - (result * 0.15);
            } else {
                result = result - (result * 0.25);
            }break;

        case "Winter":
            result = 2600
            if (numberOfFishermen <= 6){
                result = result - (result * 0.10);
            } else if (numberOfFishermen >= 7 && numberOfFishermen <= 11){
                result = result - (result * 0.15);
            } else {
                result = result - (result * 0.25);
            }
            if (numberOfFishermen % 2 == 0){
                result = result - (result * 0.05);
            }break;

           
    }

    if (budget >= result){
        result = budget - result
        console.log(`Yes! You have ${result.toFixed(2)} leva left.`)
    } else {
        result = Math.abs(budget - result);
        console.log(`Not enough money! You need ${result.toFixed(2)} leva.`)
    }

}

fishingBoat(["2000",
"Winter",
"12"])







