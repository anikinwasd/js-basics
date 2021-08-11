function minNumber(input){
    let n = Number(input[0]);
    let currNum = 0;
    let minNum = 0;

    for (let i = 1; i <= n; i++){
        currNum = Number(input[i]);
        if ( i == 1) {
            minNum = currNum
        } else if ( currNum < minNum){
            minNum = currNum;
        }

    }

    console.log(minNum)
}

minNumber([3, 2, 22, -20])