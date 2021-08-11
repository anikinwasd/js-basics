function petShop(input){
    let dogs = Number(input[0]);
    let otherAnimals = Number(input[1]);
    let dogsResult = dogs * 2.50;
    let otherAnimalsResult = otherAnimals * 4
    let finalResult = dogsResult + otherAnimalsResult;
    console.log(finalResult);

}

petShop([5, 4]);