function sumOfNumbers (input) {
    let n = input[0];
    let result = 0;

    for (let i = 0; i < n.length; i++) {
        let sum = Number(n[i]);
        result+= sum;
    }

    console.log(`The sum of the digits is:${result}`)
}

sumOfNumbers(["1234"]);