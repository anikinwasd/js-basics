function accountBalance(input){
    let index = 0;
    let money = input[index];
    let sum = 0;
    
    while (money != "NoMoreMoney"){
        let num = Number(money);
        index++
        if(money < 0){
            console.log("Invalid operation!");
            break;
        } else {
            sum += num;
            console.log(`Increase: ${num.toFixed(2)}`);
        }
        money = input[index];

    }

    console.log(`Total: ${sum.toFixed(2)}`)



}

accountBalance(["120",
"45.55",
"-150"])
