let obj1 = {
  name: "Person 1",
  age: 5,
};

let obj2 = {
  age: 5,
  name: "Person 1",
};

console.log("Checking using Stringify method...");
console.log(
  JSON.stringify(obj1).split("").sort().join("") ===
    JSON.stringify(obj2).split("").sort().join("")
);

// Here we are converting the JSON object into a string and then converting it into a character array using the split funciton after which we are sorting the array element and then joining them (The character array) into a single string again. This will help us check if the Javascript objects are equal. This is unconventional and usually a separate function will be created to handle the checking of two different objects based on the keys and values. Like below:

function checkJSONObjectEquals(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  } // If the two objects don't have the same number of key-value pairs they are not equal.

  Object.keys(obj1).forEach((key) => {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  });

  return true; // If the above checks for inequality are failed then the two objects are equal.
}

console.log("Checking using separate function...");
console.log(checkJSONObjectEquals(obj1, obj2));
