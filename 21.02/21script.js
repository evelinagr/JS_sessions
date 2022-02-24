let a = Number.parseInt(prompt("Enter the value"));

if (a < 10)
    console.log("The value is less than 10");
else if (a >=10 && a <= 20)
    console.log("The value is between 10 and 20");
else
    console.log("The value greater than 20");

    //we can rewrite statements like this: val cond ? val1 : val2
    //ex. let absVal = a >= 0 ? a : (-1) * a;