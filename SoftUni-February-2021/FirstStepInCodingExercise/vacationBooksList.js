function vacationBooksList(input){
    let numberOfPages = Number(input[0]);
    let pages = Number(input[1]);
    let days = Number(input[2]);

    let time = numberOfPages / pages;
    let result = time / days;
    console.log(result);

}

vacationBooksList([212, 20, 2]);