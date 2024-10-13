const name = "vaibhav"
const repoCount = 1
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vaibh-av')

// console.log(gameName[0]);
// // console.log(gameName.__proto__.);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,3)
console.log(newString);
const anotherString = gameName.slice(-0,3)
console.log(anotherString);

const newStringOne ="    vaibhav   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://harshit.com/harshit%20vaibhav"
console.log(url.replace('%20','-'));


console.log(url.includes('vai'));
console.log(gameName.split('  ')); 
