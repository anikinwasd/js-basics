function volleyball(input){
    let leapOrNormal = input[0];
    let holidays = Number(input[1]);
    let weekends = Number(input[2]);
    let result = '';

    let sofiaWeekends = 48 - weekends
    sofiaWeekends = sofiaWeekends * 3.0 / 4

    let gamesInCity = weekends
    let gamesInHolidays = holidays * 2.0 / 3
    let gamesTogether = sofiaWeekends + gamesInCity + gamesInHolidays
    
    if (leapOrNormal == "leap"){
        result = 0.15 * gamesTogether
        result = result + gamesTogether
        console.log(Math.floor(result))

    } else if (leapOrNormal == "normal"){
        console.log(Math.floor(gamesTogether))
    }

    

}

volleyball(["normal",
"6",
"13"])








