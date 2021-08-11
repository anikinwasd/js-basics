function skiTrip(input){
    let days = Number(input[0]);
    let typeOfRoom = input[1];
    let rating = input[2];
    let result = '';
    let final = '';
    let day = '';

   if (typeOfRoom == "room for one person"){
       day = days - 1;
       result = day * 18.00;
       if (rating == "positive"){
           final = result + (result * 0.25);
       } else if (rating == "negative"){
           final = result - (result * 0.10);
       }

       console.log(final.toFixed(2));
       
   } else if (typeOfRoom == "apartment"){
       day = days - 1;
       result = day * 25.00;
       if (days < 10){
           result = result - (result * 0.30)
       } else if (days >= 10 && days <= 15){
           result = result - (result * 0.35)
       } else if (days > 15){
           result = result - (result * 0.50)
       }

       if (rating == "positive"){
        final = result + (result * 0.25);
    } else if (rating == "negative"){
        final = result - (result * 0.10);
    }

    console.log(final.toFixed(2));
    

   } else if (typeOfRoom == "president apartment"){
    day = days - 1;
    result = day * 35.00;
    if (days < 10){
        result = result - (result * 0.10)
    } else if (days >= 10 && days <= 15){
        result = result - (result * 0.15)
    } else if (days > 15){
        result = result - (result * 0.20)
    }

    if (rating == "positive"){
     final = result + (result * 0.25);
 } else if (rating == "negative"){
     final = result - (result * 0.10);
 }

 console.log(final.toFixed(2));
 

   }
}

skiTrip(["2",
"apartment",
"positive"])

