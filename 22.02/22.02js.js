// //const arr = new Array();
// const arr = [];
////why we can change const

// arr[0] = "This is the first element";
// arr[1] = "This is the seond element";

// console.log(arr[0]);
// console.log(arr[1]);

// //arr = []; //this should trigger the error


////but it is just with const, let is fine:
//  let arrL = arr;
//  arrL = [];



//  let arrL = [5, 23, 98];
//  arrL[0] == 5;
//  arrL[1] == 23;



////if we wanna find the number of the elements (amount)
// console.log("The array has " + arr.length + " elements");

////how to add a new element to the array
// arr[arr.length] = "The last element"; //add anew element
// console.log(arr[arr.length - 1]); //this is the access to the last element
// arr.push("Another last element");//add anew element
// console.log(arr[arr.length - 1]); //this is the access to the last element

//alert(arr.length) //prints 4
//arr.length=0; //empties the array


////erray elements are accessed by an index var first = array [0]; index is a number in square brackets


// console.log(arr[10]); //trying to access the element that doesnt exist - it will print undefined
// arr[15] = 3232;
// console.log(arr[15]);
// alert(arr.length) //prints 16. the rest is undefined







////ask the user to enter the element to the array

// const arr = [];
// while(true) {
//     let element = prompt("Enter the array element");
//     arr.push(element);
//     if (prompt("Enter X to stop").toLowerCase() === "x")
//         break;
// }

// console.log(arr);
// const sortedArr = arr.sort();
// console.log(sortedArr);
// console.log(arr);

// for (let i = 0; i < arr.length; i++)
// console.log(arr[i]);



//mixed data type - no rules in sorting
const arr = [212, "Str", true, {name: "Janis", lastName: "Johnson"}]
console.log(arr.sort().reverse());
console.log(arr.pop()); //returns last element (212)
console.log(arr); //we excluded one element of the array (212)
console.log(arr.join());

const arr1 = [3,5,7];
const arr2= [5,3,9];
const arr3 = arr1.concat(arr2);
console.log(arr3);
// because console.log(arr1+arr2); does not work


//arr.concat has 2nd function


console.log(arr3.indexOf(5));













////hometask ash the user to enter the amount of array elements i want to be printed






