function readText (input){
    let index = 0;
    let text = input;
    while (true){
        let str = text[index];
        index++;
        if(str == "Stop"){
            break;
        }
        console.log(str);
        
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])
