/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

let arr1 = [1, 2, 3, 4, 5]; // numbers
let space = " ";
console.log("EXERCISE 1 " + "---->" + arr1);

const myArray = [1, 2, 3, 4, 5, 1, 7];
console.log(
  "this is myArray indexOf(1), which means first place 1 appears:",
  myArray.indexOf(1)
); // 0
console.log(
  "this is myArray lastIndexOf(1), which means last place 1 appears:",
  myArray.lastIndexOf(1)
); // 5

console.log("this is myArray sliced from place 2 to 5", myArray.slice(2, 5));
console.log(
  "slice doesnt mutate the array, if we console log it after, it doesnt change -> ",
  myArray
);

//splice operation: -> adding number 6 on the 5th place of myArray:
//careful tho, splice MUTATES the original array
myArray.splice(5, 1, 6);
// SPLICE SYNTAX: splice(start, deleteCount, item1)
console.log("this is myArray after splice:", myArray);

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let obj1 = {
  name: "Agata",
  surname: "Orminska",
  email: "aorminska@gmail.com",
  age: "30",
};

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to represent whether you have or not a driving license.
*/

obj1.hasADrivingLicence = "true";
console.log(obj1);

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete obj1.age;
console.log("object age deleted, therefore ->", obj1.age); // console.logs as undefined, which means it's successfully deleted

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let obj2 = {
  name: "John",
  surname: "Doe",
  email: "johnd@gmail.com",
};
console.log("emails are not equal:", obj1.email !== obj2.email);

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping 
 (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

const book1 = 22;
const paper = 10;
const cd = 20;
const shipping = 10;

let total = book1 + paper + cd;

if (total >= 50) {
  console.log("\n\tCONGRATS! Free shipping! Your price is: ", total);
} else {
  console.log("\n\tYour total price will be", total + shipping);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

let bfsale = total * 0.8;
if (bfsale >= 50) {
  console.log("\n\tCONGRATS! Free shipping! Your price is: ", bfsale);
} else {
  console.log("\n\t'Your total price will be'", bfsale + shipping);
}

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car1 = {
  brand: "bmw",
  model: "3",
  licensePlate: "BM123",
};
let car2 = Object.assign({}, car1);
let car3 = Object.assign({}, car1);
let car4 = Object.assign({}, car1);
let car5 = Object.assign({}, car1);
let car6 = Object.assign({}, car1);
car2.licensePlate = "AW123";
car3.licensePlate = "CD234";
car4.licensePlate = "DE456";
car5.licensePlate = "EF567";
car6.licensePlate = "GH678";
// console.log(
//   "\n",
//   car1,
//   "\n",
//   car2,
//   "\n",
//   car3,
//   "\n",
//   car4,
//   "\n",
//   car5,
//   "\n",
//   car6
// );

//Useful object functions to remember: Object.values returns array containing all object values,
// Object.entries returns array of key-value pairs of an object :)
console.log(Object.values(car1));
console.log(Object.entries(car1));

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

const carsForRent = [car1, car2, car3, car4, car5, car6];
console.log("CARS FOR RENT:", carsForRent);

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
const slicedCarsForRent = carsForRent.slice(1, 5);
console.log("sliced cars for rent:", slicedCarsForRent);

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car1);
console.log(typeof car1.licensePlate);
console.log(typeof car1.brand);

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = [];
carsForSale.push(car1, car2, car3);
let totalCars = carsForRent.concat(carsForSale);
console.log("now, the total number of cars is:", totalCars.length);
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for (let index = 0; index < carsForSale.length; index++) {
  console.log("cars for sale print:", carsForSale[index]);
}
