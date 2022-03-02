//FUNCTIONS

// function getSum(a,b) {
//     return a + b;
// }


// console.log(getSum(3,8));

// function getSum() {
//     return arguments[0] + arguments[1];
// }


function showSum(a,b) {
    console.log(a+b);
    console.log(arguments[2]);
}

let myFunc = showSum;

myFunc(4,3)







// let showSum = function(a, b) {
//     console.log(a+b);
//     console.log(arguments[2]);
// }

// console.log(typeof ShowSum)
// showSum(3, 9); //has to be after



//named functions only after the variable has been declared