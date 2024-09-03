const name = "avinash"
const user = "raju"
console.log(name);
console.log("what is user ->", user);


// string interpolation --> string la jodna
const firstname = "avinash"
const secondname = "kumar"
const fullName =firstname + " " + secondname
console.log(fullName);


// methods (ya inbuilt function of string)
const fruit = "strawberry"
//             0123456789
const final = fruit.charAt(3)
console.log(final);

const final1 = fruit.indexOf("w")
console.log(final1);  // final agar -1 aata hai toh matlab wo alphabet nahi hai

const final2 = fruit.includes("raw") // or "w"
console.log(final2);

console.log(fruit.length);

const FRUITS = fruit.toLocaleUpperCase()
console.log(FRUITS);

console.log(fruit.replace("t", "p"));

const final3 = fruit.slice(2, 8) // "raw" // startIndex -> startIndex wala bhi include hothe, // endIndex --? endIndex include nai hovay
 
console.log(final3);

 
const final4 = fruit.slice(2, )
 
console.log(final4);

// const final5 = fruit.slice(, 8) // "raw" // startIndex -> startIndex wala bhi include hothe, // endIndex --? endIndex include nai hovay
 
// console.log(final5);

