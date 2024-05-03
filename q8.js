// Q8-Write a JavaScript program to sort the characters in a string alphabetically

function sortStringAlphabetically(str) {
    // Convert to characters, sort , join back to string
    return str.split('').sort().join('');
}

const inputString = "yogita";
const sortedString = sortStringAlphabetically(inputString);
console.log(sortedString);
