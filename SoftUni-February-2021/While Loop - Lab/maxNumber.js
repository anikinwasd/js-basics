function maxNumber(input){
    let num = input[0]
    let index = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    

    while (num !== "Stop"){
        let number = Number(num);
        if (number > maxNum) {
            maxNum = number
        }
        num = input[index];
        index++
    }

    console.log(maxNum)
}
maxNumber([2, 3, 11, 400, 2, 3,
"Stop"])
