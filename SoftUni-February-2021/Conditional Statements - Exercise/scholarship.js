function scholarship(input){
    let incomeInBGN = Number(input[0]);
    let averageSuccess = Number(input[1]);
    let minimumWage = Number(input[2]);

    if (incomeInBGN < minimumWage && averageSuccess >= 4.50){
        socialScholarship = minimumWage * 0.35;
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship.toFixed(2))} BGN`)
    } else if (averageSuccess >= 5.50){
        sizeScholarship = averageSuccess * 25;
        console.log(`You get a scholarship for excellent results ${Math.floor(sizeScholarship.toFixed(2))} BGN`)
    } else {
        console.log(`You cannot get a scholarship!`)
    }

}

scholarship(["200.00",
"5.49",
"444.00"])


