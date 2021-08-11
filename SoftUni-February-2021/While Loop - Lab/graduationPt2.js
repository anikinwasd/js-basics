function graduationPt2(input){
    let name = input[0];
    let gradeCount = 0;
    let year = 1;
    let sumGrades = 0;
    let failCount = 0;


    while (year <= 12){
        let currentGrade = Number(input[year]);
        year++;
        if (currentGrade >= 4) {
            gradeCount++;
            sumGrades+= currentGrade;
        } else {
            failCount++;
            if (failCount > 1){
                gradeCount++
                console.log(`${name} has been excluded at ${gradeCount} grade`)
                break;
            }
        }
    }
    if(gradeCount >= 12){
        console.log(`${name} graduated. Average grade: ${(sumGrades/gradeCount).toFixed(2)}`)
    }

}

graduationPt2(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
graduationPt2(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])

