function charityCampaign(input){
    let days = Number(input[0]);
    let confectioners = Number(input[1]);
    let cakes = Number(input[2]);
    let waffles = Number(input[3]);
    let pancakes = Number(input[4]);

    let cakesPrice = cakes * 45;
    let wafflesPrice = waffles * 5.80;
    let pancakesPrice = pancakes * 3.20;

    let sum = (cakesPrice + wafflesPrice + pancakesPrice) * confectioners;

    let finalsum = sum * days;
    let finalsum2 = finalsum - (finalsum / 8);
    console.log(finalsum2);

}

charityCampaign([23, 8, 14, 30, 16]);