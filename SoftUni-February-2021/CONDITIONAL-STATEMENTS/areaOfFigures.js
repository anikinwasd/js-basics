function areaOfFigures(args){
    let result;
   
    if (args[0] == "square"){
        let side = Number(args[1]);
        result = Math.pow(side, 2);
    } else if (args[0] == "rectangle"){
        let a = Number(args[1]);
        let b = Number(args[2]);
        result = a * b;
    } else if (args[0] == "circle"){
        let radius = Number(args[1]);
        result = Math.PI * Math.pow(radius, 2);
    } else if (args[0] == "triangle"){
        let side = Number(args[1]);
        let h = Number(args[2]);
        result = (side * h) / 2;
    }

    result = result.toFixed(3);
    console.log(result);
}

areaOfFigures(["square", 5]);
areaOfFigures(["rectangle", 7, 2.5]);
areaOfFigures(["circle", 6]);
areaOfFigures(["triangle", 4.5, 20]);