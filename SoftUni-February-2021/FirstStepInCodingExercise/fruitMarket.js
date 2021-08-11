function fruitMarket(input){
    let berriesBGN = Number(input[0]);
    let bananasKG = Number(input[1]);
    let orangesKG = Number(input[2]);
    let raspberriesKG = Number(input[3]);
    let berriesKG = Number(input[4]);

    let raspberriesPrice = berriesBGN / 2;
    let orangesPrice = raspberriesPrice - (0.4 * raspberriesPrice);
    let bananasPrice = raspberriesPrice * 0.20;

    raspberriesSUM = raspberriesKG * raspberriesPrice;
    orangesSUM = orangesKG * orangesPrice;
    bananasSUM = bananasKG * bananasPrice;
    berriesSUM = berriesKG * berriesBGN;

    let total = raspberriesSUM + orangesSUM + bananasSUM + berriesSUM;

    console.log(total);

}

fruitMarket([48, 10, 3.3, 6.5, 1.7])