function cinema(input){
    let tickets = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let result = ''

    switch (tickets){
        case "Premiere":
            result = r * c * 12.00;
            console.log(`${result.toFixed(2)} leva`);
            break;

        case "Normal":
            result = r * c * 7.50;
            console.log(`${result.toFixed(2)} leva`);
            break;

        case "Discount":
            result = r * c * 5.00;
            console.log(`${result.toFixed(2)} leva`);
            break;
    }

}

cinema(["Discount",
"12",
"30"])



