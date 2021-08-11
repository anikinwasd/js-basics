function salary(input){
    let tabBrowser = Number(input[0]);
    let salaryProgrammer = Number(input[1]);
    let isLostSalary = false;
    let index = 2


    for (let i = 1; i <= tabBrowser; i++){
        let num = input[index];
        index++;

        if (num == "Facebook"){
            salaryProgrammer -= 150
        } else if (num == "Instagram"){
            salaryProgrammer -= 100
        } else if (num == "Reddit"){
            salaryProgrammer -= 50
        } 

        if (salaryProgrammer <= 0){
            isLostSalary = true;
            console.log("You have lost your salary.")
            break;
        }

    
    }

    if (salaryProgrammer > 0){
        console.log(Number.parseInt(salaryProgrammer))
    }
    

    }

salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])





