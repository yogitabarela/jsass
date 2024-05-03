// Q10-Write a JavaScript function to validate whether a given value type is null or not.

function isNull(value) {
    return value === null;
}

console.log(isNull(undefined)); // false
console.log(isNull(0)); // false
console.log(isNull([])); // false
console.log(isNull(null)); // true
console.log(isNull("")); // false