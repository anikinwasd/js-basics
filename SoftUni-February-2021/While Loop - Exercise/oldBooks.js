function oldBooks(input){
    let book = input[0];
    counter = 0;

    for (let i = 1; i <= input.length; i++){
        let books = input[i]
        
        if (book === books){
            console.log(`You checked ${counter} books and found it.`)
            break;

        } else if (books === "No More Books"){
            console.log(`The book you search is not here!`);
            console.log(`You checked ${counter} books.`)
            break;
        }
        counter++
    }
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"])


