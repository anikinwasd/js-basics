function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let result = '';
    let destination = '';
    let trip = "";


    if (budget <= 100){
        destination = "Bulgaria"
        if (season == "summer"){
            trip = "Camp";
            result = budget - (budget * 0.70);
        } else if (season == "winter"){
            trip = "Hotel";
            result = budget - (budget * 0.30);
        }

        console.log(`Somewhere in ${destination}`);
        console.log(`${trip} - ${result.toFixed(2)}`);

    } else if (budget <= 1000){
        destination = "Balkans"
        if (season == "summer"){
            trip = "Camp";
            result = budget - (budget * 0.60);
        } else if (season == "winter"){
            trip = "Hotel";
            result = budget - (budget * 0.20);
        }

        console.log(`Somewhere in ${destination}`);
        console.log(`${trip} - ${result.toFixed(2)}`);

    } else if (budget > 1000){
        destination = "Europe"
        if (season == "summer"){
            trip = "Hotel";
            result = budget - (budget * 0.10);
        } else if (season == "winter"){
            trip = "Hotel";
            result = budget - (budget * 0.10);
        }

        console.log(`Somewhere in ${destination}`);
        console.log(`${trip} - ${result.toFixed(2)}`);


    }        

}

journey(["1500", "summer"])