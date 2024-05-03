// Q2-Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm. 

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // if element is found
        }
    }
    return -1; // if element not found in array
}

const array = [5, 7, 3, 9, 2, 8];
const targetElement = 3;
const index = linearSearch(array, targetElement);
if (index !== -1) {
    console.log(`The first index of ${targetElement} is: ${index}`);
} else {
    console.log(`${targetElement} not found`);
}
