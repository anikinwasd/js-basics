function toyShop(input){
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = 2.60;
    let dollsPrice = 3;
    let bearsPrice = 4.10;
    let minionsPrice = 8.20;
    let trucksPrice = 2;

    let toysSUM = puzzles * puzzlesPrice + dolls * dollsPrice + bears * bearsPrice + minions * minionsPrice + trucks * trucksPrice;
    
    let toysNumbers = puzzles + dolls + bears + minions + trucks;
    
    if (toysNumbers >= 50){
        toysSUM = toysSUM - (toysSUM * 0.25);
    
    }
    toysSUM = toysSUM - (toysSUM * 0.10);

    if (toysSUM >= tripPrice){
        console.log(`Yes! ${(toysSUM-tripPrice).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${(tripPrice-toysSUM).toFixed(2)} lv needed.`)
    }


}

toyShop(["320", "8", "2", "5", "5", "1"])