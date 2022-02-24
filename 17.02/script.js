// let myObjet = {
//     myFunction: function(){
//     }
// }

//alert("Here is the alert");
// this.alert("Here is the alert"); E: no difference
  
//let answer = this.confirm("Do you want to continue?");
//console.log(answer);

//answer = this.prompt("How are you?", "Good!");
//console.log(answer);

// answer = this.prompt("Which page do you want to visit?").replace("http://", "").replace("https://", "");
// this.open("https://" + answer + ".com");


// answer = this.prompt("Which page do you want to visit?", "http://");
// this.open(answer);

// let d = new Date();

// this.alert("Today is " + d.getDate() + "." + (d.getMonth() + 1) + "." + d.getFullYear());
// this.alert(`Today is ${d.getDate()}.${(d.getMonth() + 1)}.${d.getFullYear()}`);

let age = parseInt(this.prompt("How old are you?"));
// //if (age > 17) same as below
// if (age>=18) {
//     this.alert("You can buy a glass of wine");
// }
// else{
//     this.alert("You are not allowed to buy alcohol");
// }

// if (!(age >= 18)) {
//     this.alert("No alco");
//     this.alert("No driving");
// }
// else{
//     this.alert("Yes alco");
// }

//! makes it the opposite

// if(age<18)
//     this.alert("You are underage");
// else if (age >= 18 && age < 21)
//     this.alert("NO alco in th US");
// else
//     this.alert("party");    SAME BELLOW 


//1 if; many else if, 1 else in the end
// can only go one way, if 2 are true will only execute one of them
//if there is no else just else if - it wil show nothing if it doesnt match if and else if
//if not false it will alway be true if (this) ---- will execute if not false

if(age<18)
    this.alert("You are underage");
else {
    if (age >= 18 && age < 21)
        this.alert("NO alco in th US");
    else
        this.alert("party");
    }      




