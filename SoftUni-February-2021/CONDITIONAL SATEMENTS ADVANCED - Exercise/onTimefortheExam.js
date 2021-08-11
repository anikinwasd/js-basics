function onTimefortheExam(input){
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourOfArrival = Number(input[2]);
    let minOfArrival = Number(input[3]);

    let timeExamInMin = hourExam * 60 + minExam;
    let timeArriveInMin = hourOfArrival * 60 + minOfArrival;

    if (timeExamInMin < timeArriveInMin){
        console.log("Late");

        let diff = timeArriveInMin - timeExamInMin;

        if (diff < 60){
            console.log(`${diff} minutes after the start`)
        } else {

            let h = Math.floor(diff / 60);
            let m = diff % 60;

            if (m < 10){
                console.log(`${h}:0${m} hours after the start`)
            } else {
                console.log(`${h}:${m} hours after the start`)
            }
        }
    } else if (timeArriveInMin === timeExamInMin || timeExamInMin - timeArriveInMin <= 30){
        console.log("On time");

        if (timeExamInMin - timeArriveInMin !== 0){
            
            let diff = timeExamInMin - timeArriveInMin;
            console.log(`${diff} minutes before the start`)
        }
    } else {
        console.log("Early");
        let diff = timeExamInMin - timeArriveInMin;

        if (diff < 60){
            console.log(`${diff} minutes before the start`)
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;

            if (m < 10){
                console.log(`${h}:0${m} hours before the start`)
            } else {
                console.log(`${h}:${m} hours before the start`)
            }
        }
    }

    
}

onTimefortheExam(["11",
"30",
"12",
"29"])




