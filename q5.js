// Q5-Write a JavaScript program to sort a list of elements using Heap sort.

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Swap 
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
  
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left > root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right > largest 
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest != root
    if (largest !== i) {
        // Swap the largest element with the root
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

const unsortedArray = [5, 2, 9, 3, 7, 4, 6, 1, 8];
const sortedArray = heapSort(unsortedArray);
console.log(sortedArray);
