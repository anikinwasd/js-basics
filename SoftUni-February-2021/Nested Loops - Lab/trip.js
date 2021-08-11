function trip(input){

let currentDestination = "";
let destinationPrice = 0;

for (let i = 0; i < input.length; i++){
    if (input[i] == "End"){
        break;
    }

    currentDestination = input[i++];
    destinationPrice = Number(input[i]);
    let totalSavings = 0;

    while (totalSavings < destinationPrice){
        i++;
        totalSavings += Number(input[i]);
    }

    console.log(`Going to ${currentDestination}!`)
}
}