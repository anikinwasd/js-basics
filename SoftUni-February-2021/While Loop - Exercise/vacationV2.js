function vacationV2(input){
    let index = 0;
    let isSaveMoney = true;

    let needMoney = Number(input[index]);
    index++;

    let money = Number(input[index]);
    index++;

    let counter = 0;
    let dayCouter = 0;

    while (money < needMoney){
        dayCouter++;
        let action = input[index];
        index++;

        let tmpMoney = Number(input[index]);
        index++;

        if (action === "save"){
            money += tmpMoney
            counter = 0;
        } else {
            money -= tmpMoney;
            if(money < 0){
                money = 0;
            }
            counter++;
        }

        if (counter === 5){
            console.log("You can't save the money.");
            console.log(dayCouter);
            isSaveMoney = false;
            break;
        }
    }

    if(isSaveMoney){
        console.log(`You saved the money for ${dayCouter} days.`)
    }
}

vacationV2(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])
