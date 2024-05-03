/* Q18-Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter. It converts upper case letters 
   to lower case, and lower case letters to upper case.*/

function swap(str) {
    let swappedString = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char === char.toUpperCase()) {
            swappedString += char.toLowerCase();
        } else {
            swappedString += char.toUpperCase();
        }
    }
    return swappedString;
}

const inputString = "SwaPPed StRIng";
const swappedString = swap(inputString);
console.log(swappedString); 
