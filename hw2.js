/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

const arr1 = [1, 2, 3];
const arr2 = arr1.reverse();
console.log(arr2);

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

const arrOfNumbers = [4, 6, 7, 34, 1];
const maxNumber = Math.max(...arrOfNumbers);
console.log(maxNumber);

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

const minNumber = Math.min(...arrOfNumbers);
console.log(minNumber);

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

const onlyEven = arrOfNumbers.filter((x) => x % 2 === 0);
console.log("this is a filtered array with even numbers", onlyEven);

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

const onlyOdd = arrOfNumbers.filter((x) => x % 2 !== 0);
console.log("this is a filtered array with odd numbers", onlyOdd);
/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let strToRemoveVowels = "this is a simple string";
let removed = strToRemoveVowels.replace(/[aeiouye ]/gi, "");
console.log(removed);

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let arrPlusOne = arr1.map((x) => x + 1);
console.log(arrPlusOne);
/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/
let arrayOfWords = ["this", "is", "an", "array", "of", "words"];
let arrayofLengths = arrayOfWords.map((word) => word.length);
console.log("this is an array of lengths:", arrayofLengths);
