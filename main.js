//Exercise #1
// Define two arrays, evens and odds filled with even 
// and odd numbers
// Using the spread operator, make a new
// array with numbers that contains all of the evens and odds


let evens =  [2,4,6,8,10]
let odds  =  [1,3,6,9,11]
arr = [...evens,...odds];
console.log(arr)
  

//Exercise #2
// Define an object favoriteFoods that has keys representing three of 
// your favorite foods and the values should be the restaurant where
// they are from
// Make another object and do the same thing but ask your 
// imaginary friend what their favorite foods are. 
// Use the spread operator to build a final allFoods with the 
// items from the two objects you just built

faveFoods = { burgers: 'Qdoba', pizza: 'Elsies', steak: 'Harlem Steakhouse' }
friendFaveFoods = { burrito: 'chipotle', pasta: 'carmines', salad: 'chopped' }
allFoods = { ...faveFoods, ...friendFaveFoods };
console.log(allFoods);

// Exercise #3
// Define your favorite movie character in an object
// with three keys: name, age, and hometown
// Use destructuring to extract all three keys into variables
// log all three variables
// Use the spread operator to extract two of the keys but not the third
// store and log this new set of variables
// Now we are going to give this person a pet
// Use destructuring to do the following
// 1) add a pet object to your person
// 2) define three variables (age, breed, name) outside of the object
// 3) add those variables to your pet
// log the most important thing about it: the pet's name 

myself = { name: 'Jonathan', age: '26', hometown: 'Queens' }
// const { name, age, hometown } = myself
// console.log(name, age, hometown);
const { name, age, ...me } = myself
console.log(name, age, me.hometown);
const pet = {}
myself = { ...myself, pet }
let petName = 'fred'
let petAge = 1
let petBreed = 'German-Shephard'
myself.pet.Name = petName
myself.pet.Age = petAge
myself.pet.Breed = petBreed
console.log(myself.pet.Name)