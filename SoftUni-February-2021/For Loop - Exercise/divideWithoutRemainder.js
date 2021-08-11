function divideWithoutRemainder(input){
    let n = Number(input[0]);

    let p1Counter = 0
    let p2Counter = 0
    let p3Counter = 0

    for(i = 1; i <= n; i++){
        let num = Number(input[i]);
        if(num % 2 === 0){
            p1Counter++;
        }
         if (num % 3 === 0){
            p2Counter++;
        }
         if (num % 4 === 0){
            p3Counter++;
        }
    }

    let p1Result = p1Counter / n * 100;
    let p2Result = p2Counter / n * 100;
    let p3Result = p3Counter / n * 100;

    console.log(p1Result.toFixed(2) + "%")
    console.log(p2Result.toFixed(2) + "%")
    console.log(p3Result.toFixed(2) + "%")

}

divideWithoutRemainder(["3",
"3",
"6",
"9"])

