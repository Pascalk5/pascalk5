const challenge ="Coding Days of JavaScript";

const str = challenge.indexOf(" ");
const resultStr = challenge.substring(str + 1);

const str1 = "Days of JavaScript";
const resultStr1 = challenge.replace(str1,"");

const myArray = challenge.split(" ");

const myString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
const myArrayString = myString.split(",")

let string = 'Coding Days of Python';
let newValue = challenge.replace('Coding Days of JavaScript', string);

const wordIndex = challenge.charAt(15)
const charCode = challenge.charCodeAt(wordIndex);

const indexOfa = challenge.indexOf('a');
const lastIndexOfa = challenge.lastIndexOf('a');

const stringQ17 =' You cannot end a sentence because because because is a conjunction ';
const indexofStringQ17 = stringQ17.indexOf('because');

const lastIndexofStringQ17 = stringQ17.lastIndexOf('because');
const searchIndex = stringQ17.search('because');

const trimStringQ17 = stringQ17.trim(" ");
const startWith = challenge.startsWith('Coding Days');

const endWith = challenge.endsWith('JavaScript');
const matchString = challenge.match("a");

const concat1 = "Coding Days of";
const concat2 = " JavaScript";

const newConcat = concat1.concat(concat2);
const repeatString = challenge.repeat(2);


console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(resultStr);
console.log(resultStr1);
console.log(challenge.includes('Script'));
console.log(myArray);
console.log(myArrayString);
console.log(newValue);
console.log(wordIndex);
console.log(charCode);
console.log(indexOfa);
console.log(lastIndexOfa);
console.log(indexofStringQ17);
console.log(lastIndexofStringQ17);
console.log(searchIndex);
console.log(trimStringQ17);
console.log(startWith);
console.log(endWith);
console.log(matchString);
console.log(newConcat);
console.log(repeatString);


