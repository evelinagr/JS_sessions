// let a = Number.parseInt(prompt("Enter the value"));

// if (a < 10)
//     console.log("The value is less than 10");
// else if (a >=10 && a <= 20)
//     console.log("The value is between 10 and 20");
// else
//     console.log("The value greater than 20");

//     //we can rewrite statements like this: val cond ? val1 : val2
//     //ex. let absVal = a >= 0 ? a : (-1) * a;



// let age = parseInt(prompt("Enter your age?"));

// let retMessage = age >= 21 ? "You can buy an acohol" : (age >= 18 ? "You are not under age, but you can't buy the alchol yet" : "You are under age");

// retMessage = age >= 21 ? "You can buy an acohol" :
//     age >= 18 ? "You are not under age, but you can't buy the alchol yet" : 
//     "You are under age";
// console.log(retMessage);
// //bracket or new line


// let retMessage;
// if (age >= 18)
//     retMessage = "You can buy an acohol";
// else
//     retMessage = "You are under age";


// if (a < 10)
//     console.log("The value is less than 10");
// else {
//     if (a >= 10 && a<=20)
//         console.log("The value greater than 20");
//     else
//         console.log("The value greater than 20");
// }









//SWITCH STATEMENT

// let userLevel = prompt("Enter your user level");

// switch(userLevel){
//     case"admin":
//         console.log("The user is the administrator");
//         break;
//     case"moderator":
//         console.log("The user is the moderator");
//         break;
//     case"regular":
//         console.log("This is the regular user");
//         break;
//     default:
// //         console.log("The user is not recognized");
// }

//2x case and one console
//remove break goes to closest console


// let grade = parseInt(prompt("Please, enter the grade"));

// switch (grade) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("The best is not passed");
//         break;
//         case 4:
//         case 5:
//             console.log("The test is barely passed");
//             break;
//         case 6:
//         case 7:
//             console.log("The result is normal");
//         case 8:
//         case 9:
//             console.log("Good");
//         case 10:
//             console.log("The result is fantastic");
//             break;
// }

// let value1 = 10;
// let value2 = 5;

// switch (5) {
//     case value1:
//         console.log("5 is the value in variable value1");
//         break;
//     case value2:
//         console.log("5 is the value of variable value2");
//         break;
//     default: 
//         console.log("5 is not spotted");
// }


// let age = 20;

// switch (age >= 21) {
//     case true:
//         ///
//         break;
//     case false:
//         ///
//         break;
// }



// switch (true) {

//         case (age % 5 == 0):
//         console.log("can be devided by 5");
//         break;
//         case (age % 4 == 0):
//         console.logt("can be devided by 4");
//         break;
// }

// //same as if statements just first one is executed - can be devided by 5



















// for (let i = 1; i <= 10; i++)
//     alert(i);


// let sum = 0;

// for (let i = 0; i < 501; i++) //find the sum of all the integers up to 500 (incl.)
//     sum += i;

//     console.log("The sum of all the integers up to 500 is " + sum);

    
// for (let i = 0; i < 501; i++) //find the sum of all the integers up to 500 (incl.)
//         sum += i + 5;
    
//         console.log("The sum is " + sum);
//IF THIS IS NOT COMMENTED IT TAKES IT INTO ACCOUNT!!!!
    
// for (let i = 0; i < 501; i += 5) //find the sum of all the integers up to 500, step 5 (incl.)
//         sum += i;
    
//         // console.log("The sum is " + sum);

// //GOING BACK TRYING ACCESS THE VARIABLE i OUTSIDE THE LOOP
// console.log(i);
// // i IS NOT DECLARED - ERROR

    
// for (let i = -1; i < 0; i--)
//     console.log("Infinite loop");

//or

//for (;;)
//  console.log("Infinite loop");








// // let noIterations = parseInt(prompt("Enter the number of iterations"));
// // let startElement = parseInt(prompt("Enter the starting element"));
// // //can declare as const


// // // for (let i = startElement; i < noIterations; i++) {
// // //     console.log("Iteration " + i);
// // // }


// // for (let i = startElement; i > noIterations; i--) {
// //     console.log("Iteration " + i);
// // }









// for (let i = 0; i < 601; i++) {
//     if (i % 3 == 0)
//     continue; //skip.Goes to the next iteratopm
//    console.log(i);
// }

// // let sum = 0;
// // for (;;) {
// //     sum++;
// //     console.log(sum);
// //     if (sum == 100)
// //     break;
// // }

// let sum = 0;
// for (;;) {
//     sum++;
//     console.log(sum);
//     let finish = prompt("Enter X to finish");
//     if(finish === "x")
//     break;
//}




//WE AN SHORTEN THIS

// let sum = 0;
// while (prompt("Enter x to finish").toUpperCase() !== "X") {
//     sum++;
//     console.log(sum);
//     }



// let sum = 0;
// while (true) {
//     sum++;
//     console.log(sum);
//     let finish = prompt("Enter X to finish");
//     if(finish === "x")
//     break;
//     }



// let sum = 0;
// while (prompt("Enter X to finish").toUpperCase() !== "X") {
//     sum++;
//     console.log(sum);
// }


// let sum = 0;
// do {
//     sum++;
//     console.log(sum);
// } while (prompt("Enter X to finish").toUpperCase() !== "X");
// //HERE FIRST NUMBER (1) appears first before press enter


// let i = 0;
// // while (i <500) {
// //         console.log(i);
// //         i++;
// // }
// //HERE WE HAVE TO DECLARE VARIABLE OUTSIDE THE LOOP, BETTER TO USE FOR NOT WHILE

// console.log(i); //IN THIS CASE i WILL BE AVAILABLE, DEFINED OUSTIDE THE LOOP




// for (; prompt("ENter x to finish").toUpperCase() !== "X";)
//     console.log("the loop");
//FOR LOOP CCAN BE ALSO USED AS WHILE LOOP BUT IT IS LESS READABLE