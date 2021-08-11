function vacation(input){
    let moneyForExcursion = input[0];
    let money = input[1];
    let days = 0;
    let spend = 0;


    for(let i = 2; i <= input.length; i++){
        let spendOrSave = input[i];
        days++
        if (spendOrSave === "save"){
            spend = 0;
        }
        if(spendOrSave === "spend"){
            spend++
            
            if (spend == 5){
                console.log(`You can't save the money.`)
                console.log(`${days}`)
                break;
            }

        }

        i++;
        let sum = Number(input[i]);
        if (spendOrSave === "spend"){
            money = money - sum;
            if (money < 0){
                money = 0;
            }
    
        } else if (spendOrSave === "save"){
            money = money + sum;
        }

        if (money >= moneyForExcursion){
            console.log(`You saved the money for ${days} days.`)
            break;
        }
    }
}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])
