//Q1-Write a JavaScript program to find all the index positions of a given word within a given string.

function findAllIndexes(inputString, word) {
    let indexes = [];
    let index = inputString.indexOf(word);

    while (index !== -1) {
        indexes.push(index);
        index = inputString.indexOf(word, index + 1);
    }

    return indexes;
}

const inputString = "Hello world, hello universe, hello galaxy!";
const word = "hello";
const foundIndexes = findAllIndexes(inputString.toLowerCase(), word.toLowerCase());
console.log(`The word "${word}" is found at index: ${foundIndexes}`);
