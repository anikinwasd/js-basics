function birthDayParty(input){
    let rent = Number(input[0]);

    let cake = rent * 0.20;
    let drinks = cake * 0.55;
    let animator = rent / 3
    let result = cake + drinks + animator + rent;
    console.log(result);

}

birthDayParty([2250]);
