function sumOfTwoNumbers(input){
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magic = Number(input[2]);
    let combinations = 0;
    let result = 0;
    let a = false;

    for (let i = start; i <= end; i++){
        for (let j = start; j <= end; j++){
            combinations++
            result = i + j
            
            
            if (result == magic){
               
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magic})`)
                a = true;
                break;
            }

           
            }

            if(a){
                break;

            
        }

    
    }

    if (!a){
        console.log(`${combinations} combinations - neither equals ${magic}`)
    }

    
  
}

sumOfTwoNumbers(["88",
"888",
"1000"])







