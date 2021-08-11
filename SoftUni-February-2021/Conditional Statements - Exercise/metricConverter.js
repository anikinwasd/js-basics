function metricConverter(input){
    let num = Number(input[0]);
    let second = input[1];
    let third = input[2];
    let result =''

    if (second == "m" && third == "cm") {
        let result = num * 100;
        console.log(result.toFixed(3));
    } else if (second == "m" && third == "mm") {
        let result = num * 1000;
        console.log(result.toFixed(3));
    } else if (second == "cm" && third == "m") {
        let result = num / 100;
        console.log(result.toFixed(3));
    } else if (second == "cm" && third == "mm") {
        let result = num * 10;
        console.log(result.toFixed(3));
    } else if (second == "mm" && third == "m") {
        let result = num / 1000;
        console.log(result.toFixed(3));
    } else if (second == "mm" && third == "cm") {
        let result = num / 10;
        console.log(result.toFixed(3));
    }

    
    console.log(result);

}

metricConverter(["12","mm","m"]);
