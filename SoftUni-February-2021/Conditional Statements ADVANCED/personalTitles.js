function personalTitles(input){
    let age = Number(input[0]);
    let gender = input[1];

    if (age >= 16 && gender == "m"){
        console.log("Mr.");
    } else if (age < 16 && gender == "m"){
        console.log("Master");
    } else if (age >= 16 && gender == "f"){
        console.log("Ms.");
    } else if (age < 16 && gender == "f"){
        console.log("Miss");
    }

}

personalTitles([12, "f"]);
personalTitles([17, "m"]);
personalTitles([25, "f"]);
personalTitles([13.5, "m"]);