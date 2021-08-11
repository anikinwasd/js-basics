function time15(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let totalMin = hours * 60 + minutes;
    let totalMinAfter = totalMin + 15;

    let finalHour = Math.floor(totalMinAfter / 60);
    
    if (finalHour > 23) {
        finalHour = 0;
    }

    let finalMin = totalMinAfter % 60;
    
    if (finalMin < 10) {
        console.log(`${finalHour}:0${finalMin}`);
    } else {
        console.log(`${finalHour}:${finalMin}`);
    }


}

time15(["0", "01"]);