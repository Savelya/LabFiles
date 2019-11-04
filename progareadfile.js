const fs = require("fs");
const isLetter = require("is-letter");
const isNumber = require("is-number");

function Error(type, result){
    fs.writeFileSync(process.argv[4], result);
    console.log(result);
    if(type === 2){
        console.log("In file " + process.argv[type] + " no more numbers")
    }
    if(type === 3){
        console.log("In file " + process.argv[type] + " no more letters")
    }
}

let firstFileContent = fs.readFileSync(process.argv[2], "utf8");
let secondFileContent = fs.readFileSync(process.argv[3], "utf8");
let numbersFromFirst = '';
let lettersFromSecond = '';
let result = '';

for(let i = 0; i < firstFileContent.length; i++){
    if(isNumber(firstFileContent[i])){
        numbersFromFirst += firstFileContent[i];
    }
}

for(let i = 0; i < secondFileContent.length; i++){
    if(isLetter(secondFileContent[i])){
        lettersFromSecond += secondFileContent[i];
    }
}

let n = 0;
let typeEr = 1;

if(numbersFromFirst.length > lettersFromSecond.length){
    typeEr = 3;
    n = lettersFromSecond.length;
}else if(numbersFromFirst.length < lettersFromSecond.length){
    typeEr = 2;
    n = numbersFromFirst.length;
}else{
    n = numbersFromFirst.length;
}

for(let i = 0; i < n; i++){
    result += numbersFromFirst[i] + lettersFromSecond[i];
}

Error(typeEr, result);

