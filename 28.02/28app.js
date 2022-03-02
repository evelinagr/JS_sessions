// console.log(document.title);

// document.title = "New app" //can also change in console
// let newElement = 2432

//FIND AN ELEMENT
// console.log(this.document.getElementById("para")); //returns one element
// console.log(document.getElementsByTagName("p")); //returns array
// console.log(document.getElementsByName("MyTextName")); //name="" -> names are needed to submit the forms to the backend

// let article = document.getElementById("article");
// article.style.border="1px solid red";

// this.document.getElementById("para");

// document.getElementById("tittleText").style.color = "blue";
// document.getElementById("tittleText").style.fontSize = "xx-large";
// document.getElementById("main").style.animation = "mynewmove 4s 2";



// let paragraphs = document.getElementsByTagName("p");

// for(let i = 0; i < paragraphs.length; i++){
//     let element = paragraphs[i];
//     element.style.color = "green";
// }

let myClassElements = this.document.getElementsByClassName("myClass");
for (let i = 0; i < myClassElements.length; i++){
    let element = myClassElements[i];
    element.style.fontsize = "xxx-large";
    // let childs = element.childNodes;
//     for(let j=0; j<element.childNodes.length; j++)
//     if (element.childNodes[j].tagName.tolowerCase() === "P")
//     element.childNodes[j].style.color = "red";
// }


let node = element.firstChild;
while(node != null) {
    if (nod.tagName !== undefined && node.tagName.toLowerCase() === "p")
    node.style.color = "red";
    node = node.nextSibling;
}
}
