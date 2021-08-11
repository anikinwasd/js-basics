function fishTank(input){
    let lenghtInCM = Number(input[0]);
    let widthInCM = Number(input[1]);
    let heightInCM = Number(input[2]);
    let percentage = Number(input[3]);

    let volumeOfTheAquarium = lenghtInCM * widthInCM * heightInCM;
    let liters = volumeOfTheAquarium * 0.001;
    let percent = percentage * 0.01;
    totalLiters = liters * (1 - percent);
    console.log(totalLiters);

}

fishTank([85, 75, 47, 17]);