const name = "harsh"

const user = "duggu"

console.log(name);
console.log("what is the user->",user)


// string interpolation --> string la jodna
const firstname ="aishwaraya"
const secondname ="banjare"
const fullName =firstname + " " + secondname
console.log(fullName)


// methods (ya inbuilt function of string)
const fruit = "strawberry"
//             0123456789
const final = fruit.charAt(6)
console.log(final);

const final1=fruit.indexOf("r")
console.log(final1);  // final agar -1 aata hai toh matlab wo alphabet nahi hai

const final2 = fruit.includes("") // or "w"
console.log(final2);

console.log(fruit.length);

const FRUITS = fruit.toLocaleUpperCase()
console.log(FRUITS);

console.log(fruit.replace("r", "bv"));
console.log(fruit.replaceAll("r", "bv"));

const final3 = fruit.slice(3, 6) // "raw" // startIndex -> startIndex wala bhi include hothe, // endIndex --? endIndex include nai hovay
 console.log(final3);

 
const final4 = fruit.slice(2,7 )
 
console.log(final4);

// const final5 = fruit.slice(, 8) // "raw" // startIndex -> startIndex wala bhi include hothe, // endIndex --? endIndex include nai hovay
 
// console.log(final5);


const paswword = "avinash kumar "

const pswdWithoutSpace = paswword.trim()
console.log(pswdWithoutSpace);
