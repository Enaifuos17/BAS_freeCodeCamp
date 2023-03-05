// ? Basic Algorithm Scripting
// ! -------------------------------

/*

* Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

*/

console.log("-".repeat(20));
function convertCtoF(celsius) {
  let fahrenheit;
  fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
console.log(convertCtoF(30)); // 86

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Reverse a String
Reverse the provided string and return the reversed string.

*/

function reverseString(str) {
  str = str.split("").reverse().join("");
  return str;
}
console.log(reverseString("hello"));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Factorialize a Number
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
Factorials are often represented with the shorthand notation n!
For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
Only integers greater than or equal to zero will be supplied to the function.

*/

function factorialize(num) {
  let newArr = [];
  for (let i = 1; i <= num; i++) {
    newArr.push(i);
  }
  let answer = newArr.reduce((acc, current) => {
    return acc * current;
  });
  return answer;
}
console.log(factorialize(5));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number.

*/

function findLongestWordLength(str) {
  str = str.split(" "); // convert it to array
  let answer = str.reduce((acc, current) => {
    if (acc.length >= current.length) {
      return acc;
    } else {
      return current;
    }
  });
  return answer.length;
}
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]

*/

function largestOfFour(arr) {
  return arr.map((el) => {
    return el.reduce((acc, current) => {
      if (acc > current) {
        return acc;
      } else {
        return current;
      }
    });
  });
}
console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

// mthod 2 (for loop)
function largestOfFour(arr) {
  let resArray = [0, 0, 0, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > resArray[i]) {
        resArray[i] = arr[i][j];
      }
    }
  }
  return resArray;
}
// problm ==> negative numbers

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Confirm the Ending
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

*/

function confirmEnding(str, target) {
  let targetLength = target.length;
  let answer = str.substring(str.length - targetLength);
  if (answer === target) {
    return true;
  } else {
    return false;
  }
}
console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Congratulation", "on"));
console.log(confirmEnding("Open sesame", "game"));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Repeat a String Repeat a String
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

*/

function repeatStringNumTimes(str, num) {
  if (num < 0) {
    return "";
  }
  let myArr = [];
  for (let i = 0; i < num; i++) {
    myArr.push(str);
  }
  let answer = myArr.join("");
  return answer;
}
console.log(repeatStringNumTimes("abc", 3)); // abcabcabc
console.log(repeatStringNumTimes("#", 5)); // #####
console.log(repeatStringNumTimes("ok", 2)); // okok
console.log(repeatStringNumTimes("#", -2)); // ""

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
  let answer = "";
  if (str.length <= num) {
    answer = str;
  } else {
    answer = `${str.substring(0, num)}...`;
  }
  return answer;
}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length
  )
);
console.log(
  truncateString(
    "A-tisket a-tasket A green and yellow basket",
    "A-tisket a-tasket A green and yellow basket".length + 2
  )
);
console.log(truncateString("A-", 1));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.

*/

function findElement(arr, func) {
  let res = 0;
  let newArr = []; // to get the first answer
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      res = arr[i];
      newArr.push(res);
    } else {
      res = undefined;
    }
  }
  return newArr[0];
}
console.log(findElement([1, 2, 3, 4], (num) => num % 2 === 0)); // 2
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
); // undefined

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Boo who
Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

*/

function booWho(bool) {
  if (typeof bool === "boolean") {
    return true;
  } else {
    return false;
  }
}
console.log(booWho(null)); // false
console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho(NaN)); // false
console.log(booWho([1, 2, 3])); // false
console.log(booWho(1)); // false
console.log(booWho("true")); // false

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Title Case a Sentence
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.

*/

function titleCase(str) {
  str = str.split(" ");
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }
  str = str.join(" ");
  return str;
}
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs

*/

function frankenSplice(arr1, arr2, n) {
  let resArr = arr2.slice();
  resArr.splice(n, 0, ...arr1);
  // console.log(arr1);
  // console.log(arr2);
  return resArr;
}
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
console.log(frankenSplice([1, 2], ["a", "b"], 1));
console.log(frankenSplice([1, 2, 3, 4], [], 0));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
Hint: Try converting each value to a Boolean.

*/

function bouncer(arr) {
  let resArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      resArray.push(arr[i]);
    }
  }
  return resArray;
}
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer([null, NaN, 1, 2, undefined]));

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.
The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

function getIndexToIns(arr, num) {
  arr.sort(); // sort the array first
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (num > arr[i]) {
      answer++;
    }
  }
  return answer;
}
console.log(getIndexToIns([40, 60], 50)); // 1
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 30)); // 2
console.log(getIndexToIns([3, 10, 5], 3)); // 0
console.log(getIndexToIns([], 1)); // 0

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.

*/

function mutation(arr) {
  let firstItem = arr[0].toLowerCase();
  let secondItem = arr[1].toLowerCase();
  for (let i = 0; i < secondItem.length; i++) {
    if (firstItem.indexOf(secondItem[i]) < 0) {
      return false;
    }
  }
  // else
  return true;
}
console.log(mutation(["hello", "hey"])); // false
console.log(mutation(["Alien", "line"])); // true
console.log(mutation(["Hello", "hello"])); // true
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])); // true
console.log(mutation(["ate", "date"])); // false
console.log(mutation(["voodoo", "no"])); // false

// * ---------------------------------------------------------------------------
console.log("-".repeat(20));
// * ---------------------------------------------------------------------------

/*

* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

*/

function chunkArrayInGroups(arr, size) {
  let resArray = [];
  while (arr.length > 0) {
    resArray.push(arr.slice(0, size));
    arr.splice(0, size);
  }
  return resArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
