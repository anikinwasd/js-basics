function projectsCreation(input){
    let name = input[0];
    let projects = Number(input[1]);
    let projectsResult = projects * 3
    console.log(`The architect ${name} will need ${projectsResult} hours to complete ${projects} project/s.`);

}

projectsCreation(["George", 4]);