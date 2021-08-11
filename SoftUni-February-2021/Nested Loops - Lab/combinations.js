function combinations(input){
    let a = Number(input[0]);
    let result = 0;

    for (let i = 0; i <= a; i++){
        for (let j = 0; j <= a; j++){
            for (let k = 0; k <= a; k++){
                if (i + j + k == a){
                    result++;
                }
      
            }

            

        }
    }

    console.log(result);
}

combinations([5]);