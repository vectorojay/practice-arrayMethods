// Given an array of numbers ranging from 0 to 25: [0, 1, 2, 3, 4, 5, 6...] :
// filter the even numbers
// filter the odd numbers

// RETURNING EVEN NUMBERS
const isEven = (integer) => {
  return integer % 2 === 0;
};

const filteredEven = () => {
  var array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ].filter(isEven);
  console.log(array);
};

filteredEven();

// RETURNING ODD NUMBERS
const isOdd = (integer) => {
  return integer % 2 !== 0;
};

const filteredOdd = () => {
  var array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25,
  ].filter(isOdd);
  console.log(array);
};

filteredOdd();

// Given an array of people in a hall: [{name: "John", age: 20}, {name: "Mary", age: 15}, {name: "Bob", age: 25}, {name: "Chioma", age: "19"}, {name: "Chima", age: "18"}]
//  find the adults (people from age 18 and above)
//  find the first adult (the first person whose age is above 18)

const filterAdults = (array) => {
  var adults = array.filter((adult) => adult.age >= 18);
  console.log(adults);

  adults = [];
  array.forEach((adult) => {
    if (adult.age == 18) {
      adults.push(adult);
    }
  });
  console.log(adults);
};

filterAdults([
  { name: "John", age: 20 },
  { name: "Mary", age: 15 },
  { name: "Bob", age: 25 },
  { name: "Chioma", age: "19" },
  { name: "Chima", age: "18" },
]);

// Given an array of numbers: [1, 2, 3, 4, 5]
// use the map() to create an array of the square of each number in an array
// join the two arrays and sort in an ascending order
// use the reduce() to find the sum of all the numbers in the new array

const squareNumbers = (integer) => {
  return integer ** 2;
};

// Use the map() to create an array of the square of each number in an array
const isSquared = () => {
  var array = [1, 2, 3, 4, 5];
  var mappedArray = array.map(squareNumbers);
  console.log(array);
  console.log(mappedArray);

  // Join the two arrays
  var joined = array.concat(mappedArray);
  console.log(joined);

  // Sort in an ascending order
  let sortJoined = joined.sort(function (a, b) {
    return a - b;
  });
  console.log(sortJoined);

  // Use the reduce() to find the sum of all the numbers in the new array
  let reduceJoined = joined.reduce(function (a, b) {
    return a + b;
  });
  console.log(reduceJoined);
};

isSquared();
