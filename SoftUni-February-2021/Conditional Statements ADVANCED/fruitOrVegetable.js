function fruitOrVegetable(input){
    let fruitOrVeg = input[0];

    switch (fruitOrVeg){
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");
            break;
    }
}

fruitOrVegetable(["banana"]);
fruitOrVegetable(["apple"]);
fruitOrVegetable(["tomato"]);
fruitOrVegetable(["water"]);