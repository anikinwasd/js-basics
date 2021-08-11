function examPreparation(input){
    let unsatisfactoryAssessments = Number(input[0]);
    let failcount = 0;
    let problems = 0;
    let result = 0;
    let pluscount = 0;
    let finalresult = 0;
    let text = ''

    for (let i = 1; i <= input.length; i++){
        let some = input[i];
        if (some !== "Enough"){
            text = some;
        }
        if(some === "Enough"){
            finalresult = result / pluscount
            console.log(`Average score: ${finalresult.toFixed(2)}`)
            console.log(`Number of problems: ${pluscount}`)
            console.log(`Last problem: ${text}`)
            break;
        }
        i++
        let assessment = Number(input[i]);
        result = assessment + result

        problems++
        if(assessment <= 4){
            failcount++
            pluscount++
        } else {
            pluscount++

        }

        if (failcount >= unsatisfactoryAssessments){
            console.log(`You need a break, ${failcount} poor grades.`)
            break;
        }

    
    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


