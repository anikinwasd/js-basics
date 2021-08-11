function minNumber(input){
    let num = input[0]
    let index = 0;
    let minNum = Number.MAX_SAFE_INTEGER;
    

    while (num !== "Stop"){
        let number = Number(num);
        if (number < minNum) {
            minNum = number
        }
        num = input[index];
        index++
    }

    console.log(minNum)
}

minNumber(["100",
"99",
"80",
"70",
"Stop"])
