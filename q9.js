//Write a JavaScript program to check if a numeric array is sorted or not.

function Sorted(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // when array not sorted
        }
    }
    return true; //when sorted array 
}

const arrSorted = [1, 2, 3, 4, 5];
const arrUnsorted = [5, 3, 8, 1, 9];

console.log("Is Array sorted?", Sorted(arrSorted)); 
console.log("Is unsortedArray sorted?", Sorted(arrUnsorted)); 
