function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let CubicMithreea = width * length * height
    let result = 0;

    
    for (let i = 3; i <= input.length; i++){
        let some = input[i]
        if (some === "Done" && result < CubicMithreea){
            result = CubicMithreea - result;
            console.log(`${result} Cubic meters left.`)
            break;
        } else if (result > CubicMithreea){
            result = result - CubicMithreea
            console.log(`No more free space! You need ${result} Cubic meters more.`)
            break;
        }
        let resultCarts = Number(input[i]);
        result+= resultCarts;
        
    }
    

    


}

moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])

moving(["10",
"1",
"2",
"4",
"6",
"Done"])








