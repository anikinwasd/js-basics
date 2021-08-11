function newHouse(input){
    let kindOfFlowers = input[0];
    let numberOfFlowers = Number(input[1]);
    let budget = Number(input[2]);
    let result = ''

//"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"

    switch (kindOfFlowers){
        case "Roses":
            result = numberOfFlowers * 5
            if (numberOfFlowers > 80){
                result = result * 0.90
            }break;

        case "Dahlias":
            result = numberOfFlowers * 3.80
            if (numberOfFlowers > 90){
                result = result * 0.85
            }break;

        case "Tulips":
            result = numberOfFlowers * 2.80
            if (numberOfFlowers > 80){
                result = result * 0.85
            }break;

        case "Narcissus":
            result = numberOfFlowers * 3
            if (numberOfFlowers < 120){
                result = result * 1.15
            }break;

        case "Gladiolus":
            result = numberOfFlowers * 2.50
            if (numberOfFlowers < 80){
                result = result * 1.20
            }break;

            
    }
    
    

    if (budget >= result){
        result = budget - result
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${kindOfFlowers} and ${result.toFixed(2)} leva left.`)

    } else {
        result = Math.abs(budget - result);
        console.log(`Not enough money, you need ${result.toFixed(2)} leva more.`)
    }
}

newHouse(["yellow",
"119",
"360"])


