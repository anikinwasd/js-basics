function numbersFrom1toNstep3(input){
    let n = Number(input[0]);

    for (let i = 1; i <= n; i += 3){
        console.log(i);
    }
}

numbersFrom1toNstep3([10]);