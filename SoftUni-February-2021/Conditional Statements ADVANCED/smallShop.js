function smallShop(input){
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let totalPrice =''

    switch (product) {
        case "coffee":
            switch (city) {
                case "Sofia":
                    totalPrice = 0.50 * count;
                    break;
                case "Plovdiv":
                    totalPrice = 0.40 * count;
                    break;
                case "Varna":
                    totalPrice = 0.45 * count;
                    break;
            }
            break;

            case "water":
                switch (city) {
                    case "Sofia":
                        totalPrice = 0.80 * count;
                        break;
                    case "Plovdiv":
                        totalPrice = 0.70 * count;
                        break;
                    case "Varna":
                        totalPrice = 0.70 * count;
                        break;
                }
                break;

        case "beer":
            switch (city) {
                case "Sofia":
                    totalPrice = 1.20 * count;
                    break;
                case "Plovdiv":
                    totalPrice = 1.15 * count;
                    break;
                case "Varna":
                    totalPrice = 1.10 * count;
                    break;
            }
            break;

        case "sweets":
            switch (city) {
                case "Sofia":
                    totalPrice = 1.45 * count;
                    break;
                case "Plovdiv":
                    totalPrice = 1.30 * count;
                    break;
                case "Varna":
                    totalPrice = 1.35 * count;
                    break;
            }
            break;


        case "peanuts":
            switch (city) {
                case "Sofia":
                    totalPrice = 1.60 * count;
                    break;
                case "Plovdiv":
                    totalPrice = 1.50 * count;
                    break;
                case "Varna":
                    totalPrice = 1.55 * count;
                    break;
            }
    }

    console.log(totalPrice);
}

    smallShop(["sweets", "Sofia", "2.23"])
    
    
    
    
    
    