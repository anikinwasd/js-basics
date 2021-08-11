function number100200(input){
    let num = Number(input[0]);

    if (num > 200){
        console.log("Greater than 200");
    } else if (num >= 100 && num <= 200){
        console.log("Between 100 and 200");
    } else {
        console.log("Less than 100");
    }

}

number100200([120]);
number100200([400]);
number100200([2]);



OR

function number100200(input){
    let a = Number(input[0]);

    if (a < 100){
        console.log("Less than 100");
    } else if (a > 200){
        console.log("Greater than 200");
    } else if (a >=100 && a<= 200){
        console.log("Between 100 and 200")
    }
}

number100200([210]);