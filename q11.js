// Q11-Write a JavaScript function to validate whether a given value is a number or not.

function Numbers(value) {
    return typeof value === 'number' && !isNaN(value);
}

console.log(Numbers([])); // false
console.log(Numbers(null)); // false
console.log(Numbers("Hello")); // false
console.log(Numbers(undefined)); // false
console.log(Numbers(5)); // true
