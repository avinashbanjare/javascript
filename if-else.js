// // Pascal name
// NAME_OF_EMPLOYEE

// // camel case
// nameOfEmployee

const num = 124

// if statement
if (num > 20) {
console.log("bade hare");
}


// if - else statement
if (num > 20) {
    console.log(" 20 se bade hare");
} else {
    console.log(" 20 se chhote hare");
}

if (num > 20) {
    console.log("20 se ");  
} else {
    console.log("kya hai");
    
}




// qn -> check kr number la, agar number 20 se bade hare
// agar number 3 ke phada ma aathe
const num2 = 37

console.log(num2 % 3);


// if elseif
if (num2 > 20){
    console.log(" 20 se bade hare naya wala");
} else if (num2 % 3 === 0){
    console.log("30 se pahada"); 
} else if (num2 > 10) {
    console.log("jfgeksl");
} else {
    console.log(" dimag kharab he");
}


// AND &&  -> true true false  --> false  --> sabbo true rhhi ta true nai toh false
// OR ||  -> true false false --> true  -> ek tha truerahhi ta true, sabbo false rihi to hi  falsr hoga
console.log(5 < 3 || 5 === 4 || 4 > 7 || 8 > 0); 
console.log(5 > 3 && 5 === 5 && 4 < 7 && 8 > 0);


const num3 = 21
if (num3 > 10 && 20 % 5 === 0 ){
console.log("njfjgkj");
}


// 80 >=     --->  A
// 60 - 80  B
// 40 - 60 C grade
// 40 se niche -> fail

const score = 15

if ( score >= 80 ) {
    console.log("A grade"); 
} else if ( score >= 60 ) {
    console.log("B grade");
} else if ( score >= 40 ) {
    console.log("C grade");
} else {
    console.log("Fail");
}


const numA = 50
const numB = 60


if (numA > numB){
    console.log(numA + " is greater than " + numB); 
} else {
    console.log(numA + " is smaller than " + numB); 
}

if (numA > numB){
    console.log(numA + " is greater than " + numB); 
} else {
    console.log(numA + " is smaller than " + numB); 
}


if ( numA - numB > 0 ) {
    console.log(" greater is -->", num);
    
}

