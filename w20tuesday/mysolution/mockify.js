"use strict";

function mockify (input){
    
    let letter;
    let upOrDown;
    let inputArray = input.split("");
    let outputArray = [];
    for(let i=0; i<inputArray.length; i++){

        upOrDown = Math.round(Math.random());
        letter= inputArray[i];
        if(upOrDown==1){
            letter = letter.toLowerCase();
        }
        else{
            letter = letter.toUpperCase();
        }
        outputArray.push(letter);

    }
    console.log(outputArray.join(""));

}

mockify("these used to be all lowercase letters");

// create a function called `mockify` that receives a string, 
// and returns a mocified version of that string.
