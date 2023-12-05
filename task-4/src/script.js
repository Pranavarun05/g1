// Immediately Invoked Function Expression

// a.Print odd numbers in an array
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23,
];

(function () {
  console.log("Odd numbers in array...");
  numbers.forEach((number) => {
    number % 2 !== 0 && console.log(number);
  });
  console.log("-------------------------");
})();

// b. Convert all the strings to title caps in a string array
const stringArray = [
  "lorem",
  "ipsum",
  "dolor",
  "divis",
  "etiam",
  "faucibus",
  "consectetur",
  "et consequ",
  "et ipsum",
  "ad sap",
];

(function () {
  console.log("String values in title caps...");
  stringArray.forEach((string) => {
    const result = string
      .split(" ")
      .flatMap((value) => value[0].toUpperCase() + value.substring(1))
      .join(" ");
    console.log(result);
  });
  console.log("---------------------------------");
})();

// c. Sum of all numbers in an array
(function () {
  console.log("Sum of all numbers in an array (from 1 to 23)...");
  const sum = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  console.log(sum);
  console.log("-------------------------------------------------");
})();

// d. Return all prime numbers in an array
(function () {
  console.log("Prime numbers in an array (from 1 to 23)...");
  numbers.forEach((number) => {
    let flag = true;
    for (let i = 2; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        flag = false;
        break;
      }
    }
    if (flag && number !== 1) console.log(`${number} is a prime number`);
  });
  console.log("-------------------------------------------");
})();

// e. Return all palindromes in an array
const palindromes = [
  "mom",
  "wow",
  "moment",
  "lorem",
  "moment",
  "love",
  "madam",
  "racecar",
];

(function () {
  console.log("Palindromes...");
  for (let word of palindromes) {
    word.split("").reverse().join("") === word && console.log(word);
  }
  console.log("-----------------");
})();

// g. Remove duplicates from an array
let duplicatesArray = [
  "lorem",
  "ipsum",
  "dolor",
  "lorem",
  "ipsum",
  "dolor",
  "ceturnum",
  "sit amet",
  "quis",
  "dolor",
  "sit amet",
];

(function () {
  console.log("Duplicated removed...");
  let uniqueArray = [...new Set(duplicatesArray)];
  console.log(uniqueArray);
})();

//h. Rotate an array by k times
(function () {
  console.log("Rotating numbers array (from 1 to 23) twice...");
  let n = numbers.length;
  let k = 2;

  console.log(numbers.slice(-k).concat(numbers.slice(0, n - k)));
})();

// Arrow Function Expressions for Various Array Operations

// a. Print odd numbers in an array
const printOddNumbers = () => {
  console.log("Odd numbers in array...");
  numbers
    .filter((number) => number % 2 !== 0)
    .forEach((odd) => console.log(odd));
  console.log("-------------------------");
};

// b. Convert all the strings to title caps in a string array

const convertToTitleCaps = () => {
  console.log("String values in title caps...");
  stringArray
    .map((string) =>
      string
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    )
    .forEach((titleCased) => console.log(titleCased));
  console.log("---------------------------------");
};

// c. Sum of all numbers in an array
const sumNumbers = () => {
  console.log("Sum of all numbers in an array (from 1 to 23)...");
  const sum = numbers.reduce((prev, curr) => prev + curr, 0);
  console.log(sum);
  console.log("-------------------------------------------------");
};

// d. Return all prime numbers in an array
const printPrimeNumbers = () => {
  console.log("Prime numbers in an array (from 1 to 23)...");
  numbers
    .filter((number) => {
      for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return number > 1;
    })
    .forEach((prime) => console.log(`${prime} is a prime number`));
  console.log("-------------------------------------------");
};

// e. Return all palindromes in an array

const printPalindromes = () => {
  console.log("Palindromes...");
  palindromes
    .filter((word) => word === word.split("").reverse().join(""))
    .forEach((palindrome) => console.log(palindrome));
  console.log("-----------------");
};

// Execute the functions
printOddNumbers();
convertToTitleCaps();
sumNumbers();
printPrimeNumbers();
printPalindromes();
