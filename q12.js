//Q12-Write a JavaScript function to validate whether a given value is RegExp or not.

function RegExps(value) {
    return value instanceof RegExp;
}

console.log(RegExps("test")); // false
console.log(RegExps(123)); // false
console.log(RegExps(/test/)); // true
console.log(RegExps(new RegExp('test'))); // true
