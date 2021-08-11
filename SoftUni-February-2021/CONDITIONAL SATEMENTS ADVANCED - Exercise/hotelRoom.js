function hotelRoom(input){
    let mounth = input[0];
    let nights = Number(input[1]);
    let studio = '';
    let apartament = '';

    switch (mounth){
        case "May":
            studio = nights * 50;
            apartament = nights * 65;
            if (nights > 7 && nights <= 14){
                studio = studio - (studio * 0.05);
            } else if (nights > 14){
                studio = studio - (studio * 0.30);
            }
            
            if (nights > 14){
                apartament = apartament - (apartament * 0.10);
            }

            console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
            break;

        case "October":
            studio = nights * 50;
            apartament = nights * 65;
            if (nights > 7 && nights <= 14){
                studio = studio - (studio * 0.05);
            } else if (nights > 14){
                studio = studio - (studio * 0.30);
            }
            
            if (nights > 14){
                apartament = apartament - (apartament * 0.10);
            }

            console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
            break;

        case "June":
            studio = nights * 75.20;
            apartament = nights * 68.70;
            if (nights > 14){
                studio = studio - (studio * 0.20);
            }
            
            if (nights > 14){
                apartament = apartament - (apartament * 0.10);
            }

            console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
            break;

        case "September":
            studio = nights * 75.20;
            apartament = nights * 68.70;
            if (nights > 14){
                studio = studio - (studio * 0.20);
            }
            
            if (nights > 14){
                apartament = apartament - (apartament * 0.10);
            }

            console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
            break;

        case "July":
            studio = nights * 76;
            apartament = nights * 77;
            
            if (nights > 14){
                apartament = apartament - (apartament * 0.10);
            }

            console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
            break;

        case "August":
            studio = nights * 76;
            apartament = nights * 77;
            
            if (nights > 14){
                apartament = apartament - (apartament * 0.10);
            }

            console.log(`Apartment: ${apartament.toFixed(2)} lv.`);
            console.log(`Studio: ${studio.toFixed(2)} lv.`);
            break;


            
            
            

    }    

           
      
}
hotelRoom(["August",
"20"])


    


