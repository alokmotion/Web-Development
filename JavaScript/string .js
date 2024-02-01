// length 
let str = "           Hello my name is alok patel                                  "


console.log(str.length);

// trim()

console.log(str.trim(str).length)
console.log(str.trim(str))


// slice(start index, end index) --> 
let str1  = "12345 67890"
console.log(str1);
console.log(str1.slice(1,-8));
// substring(start index, end index) --> does not accept negative value
console.log(str1.substring(1,-8));


//substr(start, length)

console.log(str.substr(0,5))

// replace(replace value , replace with value)

console.log(str.replace(" ","+"))  //The replace method in JavaScript replaces only the first occurrence of a specified substring with another substring.

console.log(str.replace(/ /g,"+")) //// To replace all occurrences, use a regular expression with the global flag




// replaceAll() introduced in ECMAScript 2021 (ES12/ES2021)
let newStr = "Hey i am a string sentence"
console.log(newStr.replaceAll(" ","/"));


// concat(objectOfString)

let name = "AMC ";
let amc = "stand for Alok motion classes";
console.log(name .concat(amc));





// padStart(lenght, fill string) and  padEnd()
let originalString = "Hello";
let paddedString = originalString.padStart(10, '*');

console.log(paddedString); // Output: "*****Hello"


// split(character)

let str3 = "Ram/kumar/Yadav"
console.log(str3.split("`"))



