function trainTheTrainers(input){
    let index = 0;
    let n = Number(input[index]);
    index++;

    let command = input[index];
    index++;
    let counter = 0;
    let avgGrade = 0;

    while(command !== "Finish"){
        counter++;
        let presentationName = command;
        let tempAvgGrade = 0;
        for(let i = 0; i < n; i++){
            let tempGrade = Number(input[index]);
            index++;
            tempAvgGrade += tempGrade;
            
        }

        tempAvgGrade = tempAvgGrade / n;
        console.log(`${presentationName} - ${tempAvgGrade.toFixed(2)}.`);
        avgGrade += tempAvgGrade;
        command = input[index];
        index++;

        
    }

        avgGrade = avgGrade / counter;
        console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`)
}