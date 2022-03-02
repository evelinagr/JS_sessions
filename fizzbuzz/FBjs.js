// let numberOfFb = parseInt(prompt("Enter the amount of FB numbers"));

// let i = 1;
// let FB = 0;

// while (FB < numberOfFb){
//     //if (i % 3 == 0 && current % 5 == 0)
//     if (i % 15 === 0) {
//     console.log(i);
//     FB++;
//     }
//     i++;//go to the next number
//     }
    


    
//     let current = 0;
//     for (let i = 0; i < numberOfFb; i++) {
//         current += 15;
//         console.log(current);
//     }


let numberOfFb = parseInt(prompt("Enter the amount of FB numbers"));

let current = 1;
let sk = 0;
while (sk < numberOfFb){

    let previousStr;
    let previousNumber;

    if (current % 15 === 0) {
        console.log(current); 
        previousStr = "";
        sk++;
    } else if (current % 3 == 0) {
        previousStr = "Fizz";
        previousNumber = current;
    } else if (current % 5 == 0) {
         if (previousStr === "Fizz") {
        console.log(previousNumber);
        console.log(current);
        previousStr = "";
        previousStr = 0;
        sk+= 2;
        }
    }
    current++;
}