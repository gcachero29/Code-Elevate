//this is a comment
/* 
this is a comment
*/
 
// declare
var myName; 

var MYVAR;
var MYVAR;
var myvar;

//camel case
var myvar;

//numvers,letters, $,_
//not spaces and can't start with a number

var myVar;
var myVar;

var a;
a=55;
//console.log(a);
//console.log("this is a");

var b
b=a;

//string
console.log("b is equal to:" + b);
var myLastName ="Gabby";
var myLastName = "Cachero";
var num = "12";


var number ="code";

var x = 4;
var y = 11;
var z = "I am a ";

x= x+1
y= y+5
z=z+ "Coder"

console.log(x);
console.log(y);
console.log(z);







var camper = "Gabby";
var camper = "Asher";
console.log(camper)

let student = "Gabby";
//let student = "Asher";
console.log(student);


const FAV_PET = "Dogs";
//FAVE_PET = "Cats";

const SUM = 10+10;
const DIFFERENCE = 45 -9;
const QUOTIENT = 66/33;
const PRODUCT = 9*8;
console.log(SUM);
console.log(DIFFERENCE);
console.log(QUOTIENT);
console.log(PRODUCT);


var sum = 15+10;
console.log(sum);

let sum1 = 15+1;
console.log(sum1);

let newVar= 66;
newVar = newVar + 1;
//equivalent to...
newVar++

console.log(newVar)

newVar = newVar -1;
//same ass...
newVar--;

let v = 6;
v+=6;
console.log("this is v:" +v)

let s = 10;
s-= 7;
console.log("this is s:"+s);

let m=9;
m*=2;
console.log("this is m:" +m);

let p = 10;
p/=5;
console.log("this is p:" + p);

//=== 22

var n=23
if(n== 22) {

    console.log("this number is 22");

}

else{
    console.log ("this number is not 22");
}

if(n==23){
console.log("this number is 23");

}
else{
    console.log("this number is neither 22 or 23")
}

var n = 23
if (n== 22||n==23) {
    console.log("n is 22 or 23");
} else {
    console.log("n is neither 22 or 23");
}

var number = "47";

if (number ==47) {
    console.log("checked: this number is 47");
} else {
    console.log("checked: this number isn't 47")
}
number++;
number--;

console.log("number="+ number); 
console.log("number is" + number +". This number is prime."
);

var numCheck = 20;
if (number <=10) {
    console.log ("num is less than or equal to 10");

} else if (number >=11) {
    console.log ("nun is greater than or equal to 11");

} else {
    console.log("this is not a number");
}

const PET = "dog";

 if (PET === "lizard"){
     console.log("i own a lizard");
   
 } else if (PET === "dog") {
     console.log("i own a dog"); 
 } else if (PET === "cat") {
     console.log("i own a cat")
 } else {
     console.log("I dont own a pet");
 }
 
//switch statement
 switch(PET) {
     case "lizard":
         console.log("i own a lizard")

    case "dog":
        console.log("i own a dog")
    
    case "cat":
        console.log("i own a cat")
    default:
        console.log("i don't own a pet")
 }
 
const COUNTRY = "Ireland";
switch(COUNTRY) {
    case "France":
    case "Spain":
    case "Ireland":
    case "Poland":
        console.log ("This country is in Europe.");
        break;
        case "United States":
            default:
                console.log ("Th=his country is not in Europe");
        break;

}

const ERRAND = "Going Shopping";
switch (ERRAND) {
    case "Going to the Dentist":
        let message = " I hate going ot the dentist"; {
        console.log(message);

        break;
        }

    case "Going shopping": {
        let message = "I love shop!";
    console.log(message);
    break;
    }

    case "chores":{
        let message= "I hate doing chores";
        console.log (message);
    break;
        }
        default: {
            let message ="No errands";
            console.log(message);
                break;
        }
    }

    function myFunction(){
        //whatever
        //alert("I am an alert box");

   // var txt;
   // if(confirm("Press a button")) {
    //    txt="You pressed OK!";
   // } else {
      //  txt = "You presed Cancel!";
       


  let text; 
  let person = prompt ("Please enter your name", "JugHead Jones");
  if(person == null || person == "") {
      text = "User cancelled the prompt";
  } else {
      text = "Hello" + person + "! How are you today?";
  }
      document.getElementById("demo").innerHTML = text;
    }


/*var i = 0 
console.log("Starting Loop");
while (i > 10){
    console.log("The number is" + i);
    i++

}
*/
/*var i = 10
console.log("Starting loop");
do{
    console.log("The number " + i);
    i--;

} while (i>0);
*/

var count;
console.log ("Starting loop");
for(count = 0; count < 10; count ++){
    console.log("Current Count:" +count);
}
console.log("Loop stopped!")

