// Q6-Write a JavaScript program to sort a list of elements using Insertion sort 

function insertionSort(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

const unsortedArray = [5, 2, 9, 3, 7, 4, 6, 1, 8];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray);
