// Q3-Write a JavaScript program to sort a list of elements using Quick sort.
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(pivot, quickSort(right));
}

const unsortedArray = [5, 2, 9, 3, 7, 4, 6, 1, 8];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);
