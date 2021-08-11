function fruitShop(input){
    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let result = ''

    switch (fruit){
        case "banana":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 2.50
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 2.70
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "apple":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 1.20
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 1.25
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "orange":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 0.85
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 0.90
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "grapefruit":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 1.45
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 1.60
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "kiwi":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 2.70
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 3.00
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "pineapple":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 5.50
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 5.60
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;

        case "grapes":
            if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday"){
                result = amount * 3.85
                console.log(result.toFixed(2));
            } else if (day == "Saturday" || day == "Sunday"){
                result = amount * 4.20
                console.log(result.toFixed(2));
            } else {
                console.log("error")
            }break;
                default:
                console.log("error");
                break;

    }

}

fruitShop(["banana",
"tomato",
"2"])










