// Q7-Write a JavaScript program to sort a list of elements using Bubble sort 

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap 
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const unsortedArray = [5, 2, 9, 3, 7, 4, 6, 1, 8];
const sortedArray = bubbleSort(unsortedArray);
console.log(sortedArray);
